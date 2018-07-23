import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import propTypes from 'prop-types'

const weatherCases = {
    Rain:{
        colors:['#00C6FB','#005BEA'],
        title:'밖에 비옴',
        subtitle:'비안들어오게 문닫어',
        icon: 'weather-rainy'
    },
    Clear:{
        colors:['#FEF253','#FF7300'],
        title:'쨍쨍',
        subtitle:'야외활동을 합시다',
        icon: 'weather-sunny'
    },
    Thunderstorm:{
        colors:['#00ECBC','#007ADF'],
        title:'천둥번개임',
        subtitle:'집 밖에나가면 뒤진다',
        icon: 'weather-lightning'
    },
    Clouds:{
        colors:['#D7D2CC','#304352'],
        title:'구름',
        subtitle:'외투 챙겨',
        icon: 'weather-cloudy'
    },
    Snow:{
        color:['#7DE2FC','#B9B6E5'],
        title:'눈온다',
        subtitle:'눈싸움하러ㄱㄱ',
        icon: 'weather-snowy'
    },
    Drizzle:{
        colors:['#89F7FE','#66A6FF'],
        title:'이슬비',
        subtitle:'마 남자아이가! 이정도면 맞을만하다 아이가!',
        icon: 'weather-hail'
    },
    Haze:{
        colors:['#D7D2CC','#304352'],
        title:'안개',
        subtitle:'축축혀',
        icon: 'weather-fog'
    },
    Mist:{
        colors:['#D7D2CC','#304352'],
        title:'안개',
        subtitle:'축축혀',
        icon: 'weather-fog'
    }
}

function Weather({ temp, weatherName }) {
    console.log(weatherName)
    return(
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons color={'white'} size={144} name={weatherCases[weatherName].icon}/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.PropTypes = {
    temp:propTypes.number.isRequired,
    weatherName: propTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    upper:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:20
    },
    temp:{
        fontSize:50,
        color:'white',
    },
    lower:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:40,
        color:'white',
    },
    subtitle:{
        fontSize:20,
        color:'white',
        marginBottom:24
    }
})