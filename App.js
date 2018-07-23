import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import Weather from "./Weather";

const API_KEY = 'efa29e1d284296abc05b2c42fd0d72fa';

export default class App extends React.Component {
    state = {
        isLoaded: false,
        error: null,
        temperature:null,
        name:null
    };
    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            position => {
                 this._getWeather(position.coords.latitude, position.coords.longitude)
            },
            error => {
                this.setState({
                    error:'위치정보를 받아오는데 실패하였습니다'
                })
            }
        )
        navigator.geolocation.getCurrentPosition(
            position => {
              console.log(position);
            }
        )
    }
    _getWeather= (lat,long) =>{
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
            .then(response => response.json())
            .then(json =>{
                this.setState({
                    temperature:json.main.temp,
                    name:json.weather[0].main,
                    isLoaded: true
                });
            });
    }
    render() {
        const {isLoaded, error, temperature, name} = this.state
        return (
            <View style={styles.container}>
                {
                    isLoaded ? <Weather weatherName={name} temp={(temperature - 273.15)} />
                        : (

                            <View style={styles.loading}>
                                <View style={styles.indicator}>
                                    <ActivityIndicator style={styles.indicator} size={"large"} color={"white"}/>
                                </View>
                                <Text style={styles.loadingText}>날씨정보를 받아오는 중입니다.</Text>
                                {
                                    error ? <Text style={styles.errorText}>{error}</Text>
                                        :null
                                }
                            </View>
                        )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    errorText:{
        color:'red',
        justifyContent:'center',
        alignItems:'center',
        fontSize:40
    },
    loading: {
        flex: 1,
        backgroundColor: '#1c8cff',
        justifyContent: 'center',
        paddingLeft: 25

    },
    loadingText: {
        fontSize: 31,
        marginBottom: 150,
        color: 'white'
    },
    indicator: {
        flex: 1,
        justifyContent: 'center'
    }
});