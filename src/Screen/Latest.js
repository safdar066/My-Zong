import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native";
import Header from "../Components/Header";
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const DATA = [
    {
        id: '1',
        title: 'All',
    },
    {
        id: '2',
        title: 'Bundles',
    },
    {
        id: '3',
        title: 'Self Services',
    },
    {
        id: '4',
        title: 'VAS',
    },
    {
        id: '5',
        title: 'Promotions',
    },
    {
        id: '6',
        title: 'Regional Offers',
    },
];
const IMAGE = [
    {
      id: '1',
      title: 'Weekly Social - MZA Execlusive',
      title2: 'Offer',
      activeamount: '4,387',
      img: require('../Images/Latest1.jpg'),

    },
    {
        id: '2',
        title: 'Share your bundle with friends &',
        title2: 'family',
        img: require('../Images/Latest2.jpg'),
      activeamount: '13.7K',

      },
      {
        id: '3',
        title: '1 hour YouTube Offer',
      activeamount: '27.5K',
      
        img: require('../Images/Latest10.jpg')
      },
      {
        id: '4',
        title: 'Zong X Sehat Kahani - Free',
        title2: 'Consultations',
      activeamount: '11.8K',
      img: require('../Images/Latest5.jpg')
      },
      {
        id: '5',
        title: 'IDD Mera Apna Bundle',
        
      activeamount: '17K',
      img: require('../Images/Latest3.jpg')
      },
      {
        id: '6',
        title: 'Super Weekly Max',
      activeamount: '44K',
      img: require('../Images/Latest4.jpg')
      },
      {
        id: '7',
        title: 'Spotify Premium with Zong 4G',
      activeamount: '14.8K',
      img: require('../Images/Latest6.jpg')
      },
      {
        id: '8',
        title: 'Weekly Social - MZA Execlusive',
        title2: 'Offer',
      activeamount: '4,387',
      img: require('../Images/Latest1.jpg')
      },
      {
        id: '9',
        title: 'Monthely Social',
      activeamount: '9,213',
      img: require('../Images/Latest9.jpg')
      },
      {
        id: '10',
        title: 'Monthely PUBG Mobile',
        activeamount: '12.6K',

        img: require('../Images/Latest8.jpg')
      },
      {
        id: '11',
        title: 'Monthely Whatsapp Plus',
      activeamount: '4,387',
      img: require('../Images/Latest11.jpg')
      },
      
  ];
const Latest = () => {
    return (
        <View style={styles.container}>
            <Header
                screentitle="Latest"
            />
            <View style={styles.AllbundlesContainer}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}

                    data={DATA}
                    renderItem={({ item }) => (

                        <View style={styles.allbundlesrows}>
                            <TouchableOpacity style={styles.remainingBundles}><Text style={styles.remainingBundlesText}>{item.title}</Text></TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={item => item.id}

                />
                <View style={styles.filtericonContainer}>
                    <View style={styles.iconContainer}><Octicons name="sort-desc" size={20} color="white" /></View>
                </View>
            </View>
            <FlatList
        data={IMAGE}
        renderItem={({item})=>(
            <View style={styles.latestbundlesContainer}>
                <View style={styles.latestPackagename}>
                    <View>
                        <Text style={styles.latestpackageText}>{item.title}</Text>
                        <Text style={styles.latestpackageText}>{item.title2}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.totalActive}>{item.activeamount}</Text>
                        <Ionicons name="md-heart-outline" size={24} color="#e2006e" />
                    </View>
                </View>
                <Image 
                resizeMode="contain"
                style={styles.imageStyle}
                source={item.img}>

                </Image>
            </View>
        )}
        keyExtractor={item => item.id}
      />
           <View><Text>h</Text></View> 
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
marginBottom:120
    },
    AllbundlesContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },
    allbundlesrows: {
        flexDirection: 'row',
        alignItems: 'baseline',
        height:40
    },
    all: {
        height: 30,
        width: 75,
        backgroundColor: '#8fc320',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    allText: {
        fontWeight: 'bold',
        color: 'white'
    },
    remainingBundles: {
        height: 30,
        width: 106,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
        borderColor: '#807f7d',
        borderWidth: 1,
        backgroundColor: '#e0e0e0'
    },
    remainingBundlesText: {
        fontWeight: 'bold',

    },
    filtericonContainer: {
        width: 62,
        height: 40,
        alignItems: 'center',


    },
    iconContainer: {
        height: 30,
        width: 50,
        backgroundColor: '#e2006e',
        alignItems: 'center',
        borderRadius: 13,
        justifyContent: 'center'
    },
    latestbundlesContainer: {
        height: 175,
        backgroundColor: 'white',
        marginHorizontal: 18,
        borderRadius: 19,
        marginBottom:18,
        paddingBottom: 16
        

    },
    latestPackagename: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18
    },
    latestpackageText: {
        fontWeight: 'bold'
    },
    totalActive: {
        fontSize: 11, marginRight: 5,
    },
    imageStyle:{
        height:105,
        width:'100%',
        borderBottomLeftRadius:19,
        borderBottomRightRadius:19,
    }
});
export default Latest;
