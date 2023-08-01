import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';

import { Entypo } from '@expo/vector-icons';

const ServiceData = [
  {
    id: "1",
    img1: require('../Images/a1.jpg'),
    img1Text: "Rewards",
  },
  {
    id: "2",
    img1: require('../Images/a2.jpg'),
    img1Text: "Brief History",
  },
  {
    id: "3",
    img1: require('../Images/a3.jpg'),
    img1Text: "Rs. 10 Shop",
  },
  {
    id: "4",
    img1: require('../Images/a4.jpg'),
    img1Text: "Cric Live",
    img1Text1: "Scores",
  },
  {
    id: "5",
    img1: require('../Images/a5.jpg'),
    img1Text: "Games",
  },
  {
    id: "6",
    img1: require('../Images/a6.jpg'),
    img1Text: "Google",
    img1Text1: "Maps",
  },
  {
    id: "7",
    img1: require('../Images/a7.jpg'),
    img1Text: "IR",
  },
  {
    id: "8",
    img1: require('../Images/a8.jpg'),
    img1Text: "Yaari Load",
  },
  {
    id: "9",
    img1: require('../Images/a9.jpg'),
    img1Text: "Call Blocks",
  },
  {
    id: "10",
    img1: require('../Images/a10.jpg'),
    img1Text: "Information",
  },
  {
    id: "11",
    img1: require('../Images/a11.jpg'),
    img1Text: "Balance",
    img1Text1: "Save",
  },
  {
    id: "12",
    img1: require('../Images/a12.jpg'),
    img1Text: "Tax",
    img1Text: "Certificate",
  },
  {
    id: "13",
    img1: require('../Images/a13.jpg'),
    img1Text: "Online",
    img1Text1: "Booking",
  },
  {
    id: "14",
    img1: require('../Images/a14.jpg'),
    img1Text: "Book Your",
    img1Text1: "Number",
  },
  {
    id: "15",
    img1: require('../Images/a15.jpg'),
    img1Text: "More Apps",
  },


];
const ServiceOffer = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={{...styles.zongservices, height:show?400:250}}>

      <FlatList

        numColumns={4}
        columnWrapperStyle={{ justifyContent: 'space-around', marginBottom: -2 }}
        // contentContainerStyle = {{justifyContent:'space-evenly',}}
        data={ServiceData}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.servicesImagesandTextContainer}>
            <Image
              resizeMode="contain"
              style={styles.serviceslogoStyle}
              source={item.img1}
            />
            <Text style={styles.zongservicesText}>{item.img1Text}</Text>
            <Text style={styles.zongservicesText}>{item.img1Text1}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    {
show? <TouchableOpacity 
onPress={()=>setShow(!show)}
style={styles.viewMore}>
  <Text style={styles.viewmoreTextStyle}>View Less</Text>
  <Entypo name="chevron-small-up" size={20} color="#8fc320" />

</ TouchableOpacity>:<TouchableOpacity 
      onPress={()=>setShow(!show)}
      style={styles.viewMore}>
        <Text style={styles.viewmoreTextStyle}>View more</Text>
        <Entypo name="chevron-small-down" size={20} color="#8fc320" />
    
    </ TouchableOpacity>
    }
      
    </View>
  )
};
const styles = StyleSheet.create({
  zongservices: {
    shadowRadius: 0.8,
    elevation: 1,
    margin: 16,

    marginTop: -15,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'

  },
  servicesImagesandTextContainer: {
    alignItems: 'center',
    marginTop: 19,
  },
  serviceslogoStyle: {
    height: 37,
    width: 32,
    marginBottom: 8

  },
  zongservicesText: {
    fontSize: 12,
  },
  viewMore: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewmoreTextStyle: {
    color: '#8fc320',
    fontWeight: 'bold'
  }
});
export default ServiceOffer;