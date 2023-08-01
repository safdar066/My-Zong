import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native'

import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
    wrapper: {
        height: 245,
      
   
    },
    slide1: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 24,
        shadowRadius: 2,
        shadowColor: 'black',
        elevation: 3,
        margin: 16,
        width: '90%',
        height:180,
    
       

    },
    imageStyle:{
        borderRadius: 24,
        shadowRadius: 2,
        shadowColor: 'black',
        elevation: 26,
        width: '100%',
        height:180
    },
    
   
})

const OfferSlider = () => {
    return (
        <Swiper 
        autoplay={true}
        activeDotColor='#e2006e'
        dotStyle={{marginTop:100}}
        activeDotStyle={{marginTop:100,}}
        style={styles.wrapper} >
            <View style={styles.slide1}>
              < Image 
              resizeMode='contain'
              style={styles.imageStyle}
              source={require('../Images/slider1.jpg')}
              />  
            </View>
            <View style={styles.slide1}>
              < Image
              resizeMode='stretch' 
              style={styles.imageStyle}
              source={require('../Images/slider2.jpg')}
              />  
            </View>
            <View style={styles.slide1}>
              < Image 
              resizeMode='stretch'
              style={styles.imageStyle}
              source={require('../Images/slider3.jpg')}
              />  
            </View>
            <View style={styles.slide1}>
              < Image 
              resizeMode='stretch'
              style={styles.imageStyle}
              source={require('../Images/slider4.jpg')}
              />  
            </View>
        </Swiper>
    )
}


AppRegistry.registerComponent('myproject', () => SwiperComponent)

export default OfferSlider;