import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native'

import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const DATA = [
  {
    id: '1',
    packageName: 'Monthely Pro Plus',
    totalMB: '60GB',
    offnetminutes: '600',
    zongMinutes: '10000',
    sms: '10000',
    totalPrice: '1249PKR',
    validity: '30 days',
  },
  {
    id: '2',
    packageName: 'Weekly Social Offer',
    totalMB: '5GB',
    offnetminutes: '10',
    zongMinutes: '200',
    sms: '200',
    totalPrice: '120PKR',
    validity: '7 days',
  },
  {
    id: '3',
    packageName: 'Weekly PRO',
    totalMB: '40GB',
    offnetminutes: '250',
    zongMinutes: '5000',
    sms: '5000',
    totalPrice: '399PKR',
    validity: '7 days',
  },
  {
    id: '4',
    packageName: 'Monthely Pro ',
    totalMB: '40GB',
    offnetminutes: '600',
    zongMinutes: '10000',
    sms: '10000',
    totalPrice: '1249PKR',
    validity: '30 days',
  },
  {
    id: '5',
    packageName: 'Whatsapp Plus Offer',
    totalMB: '5GB',
    offnetminutes: '30',
    zongMinutes: '200',
    sms: '200',
    totalPrice: '180PKR',
    validity: '30 days',
  },
  {
    id: '6',
    packageName: 'Monthely Super Card',
    totalMB: '6GB',
    offnetminutes: '250',
    zongMinutes: '5000',
    sms: '5000',
    totalPrice: '749PKR',
    validity: '30 days',
  },
  {
    id: '7',
    packageName: 'Monthely Supreme',
    totalMB: '20GB',
    offnetminutes: '350',
    zongMinutes: '5000',
    sms: '5000',
    totalPrice: '999PKR',
    validity: '30 days',
  },
  {
    id: '8',
    packageName: 'Weekly Premium',
    totalMB: '30GB',
    offnetminutes: '180',
    zongMinutes: '5000',
    sms: '5000',
    totalPrice: '385PKR',
    validity: '7 days',
  },
];

const PackageSlider = () => (
  <View style={styles.container}>
    <SwiperFlatList
      autoplayDelay={3}
      
      paginationStyle={{marginVertical:-5, }}
      paginationStyleItem	={{height:8.5,width:8.5, marginHorizontal:3}}
      showPagination
      paginationDefaultColor='#bab6b6'
      paginationActiveColor='#e2006e'
      data={DATA}
      renderItem={({ item }) => (
        <View style={styles.packageMainContainer}>
          <View style={styles.PackgeNameContainer}>
            <View style={styles.flashsalescontainer}>
              <Text style={styles.flashSalesText}>Flash Sale</Text>
            </View>
            <Text style={styles.packageNames}>{item.packageName}</Text>
          </View>
          <View style={styles.packageIncludeContainer}>

            <View style={styles.sperateMBContainer}>
              <Fontisto name="wifi" size={16} color="#8fc320" />
              <Text style={styles.packageTotalOffer}>{item.totalMB}</Text>
              <Text style={styles.seperatePackageName}>Data</Text>
            </View>
            <View style={styles.sperateMBContainer}>
              <Feather name="phone-call" size={16} color="#8fc320" />
              <Text style={styles.packageTotalOffer}>{item.offnetminutes}</Text>
              <Text style={styles.seperatePackageName}>Off-Net Mins</Text>
            </View>
            <View style={styles.sperateMBContainer}>
              <Feather name="phone-call" size={16} color="#8fc320" />
              <Text style={styles.packageTotalOffer}>{item.zongMinutes}</Text>
              <Text style={styles.seperatePackageName}>Zong Mins</Text>
            </View>
            <View style={styles.sperateMBContainer}>
              <MaterialCommunityIcons name="message-processing" size={16} color="#8fc320" />
              <Text style={styles.packageTotalOffer}>{item.sms}</Text>
              <Text style={styles.seperatePackageName}>SMS</Text>
            </View>
          </View>
          <View style={styles.requiredBalnceandValiditysubscriberContainer}>
            <View style={styles.requiredbalnceValidity}>
              <View style={styles.rechargeRequired}>
                <Text style={styles.balncePKR}>{item.totalPrice}  </Text>
                <Text style={styles.rechargeRequiredText}>Recharge Required</Text>

              </View>
              <View style={styles.validitydetails}>
                <Text style={styles.ValidityText}>Validity: </Text>
                <Text style={styles.durarion}>{item.validity}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.subscribeContainer}><Text style={styles.subscribeText}>Subscibe</Text></TouchableOpacity>
          </View>

        </View>
      )}
    />

  </View>

);

const styles = StyleSheet.create({
 
  packageMainContainer: {
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 24,
    shadowRadius: 2,
    shadowColor: 'black',
    elevation: 3,
    marginHorizontal: 16,
    marginBottom:16,
    width: 328,
    height: 200,
    
  },
  PackgeNameContainer: {
    height: 50,
    backgroundColor: "#8fc320",
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    justifyContent: 'space-around',
    paddingLeft: 18,

  },
  flashsalescontainer: {
    height: 14,
    width: 58,
    backgroundColor: '#ffbb00',
    borderRadius: 18,
    alignItems: 'center'
  },
  flashSalesText: {
    color: "white",
    fontSize: 10,
  },
  packageNames: {
    fontWeight: 'bold',
    color: 'white'
  },
  packageIncludeContainer: {
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomWidth: 0.4,
    borderColor: '#7c7c7c',

  },
  sperateMBContainer: {
    alignItems: 'center',

  },
  packageTotalOffer: {
    fontSize: 12,
    fontWeight: '800',
    marginVertical: 5
  },
  seperatePackageName: {
    fontSize: 11,
    color: '#7c7c7c'
  },
  requiredBalnceandValiditysubscriberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 70,
    alignContent: 'center',
    alignItems: 'center'
  },
  requiredbalnceValidity: {

  },
  rechargeRequired: {
    flexDirection: 'row',
    alignItems: 'center'

  },
  balncePKR: {
    fontWeight: 'bold',
    color: "#8fc320"

  },
  rechargeRequiredText: {
    fontSize: 10,
    color: '#7c7c7c'
  },
  validitydetails: {
    flexDirection: 'row'
  },
  ValidityText: {
    fontSize: 13,
    color: '#7c7c7c',
    fontWeight: 'bold'
  },
  durarion: {
    fontSize: 12,
    color: '#7c7c7c'

  },
  subscribeContainer: {
    height: 26,
    width: 108,
    backgroundColor: '#e2006e',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subscribeText: {
    fontWeight: 'bold',
    color: 'white'
  }
});

export default PackageSlider;