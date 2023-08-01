import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList } from "react-native";
import Header from "../Components/Header";
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import OfferSlider from "../Components/OfferSlider";
import { AntDesign } from '@expo/vector-icons';
import ServiceOffer from "../Components/ServiceOffer";
import PackageSlider from "../Components/PackageSlider";
import Map from "../Components/Map";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header 
            screentitle="Hello, Safdar!"
            />
            <ScrollView>
                <View style={styles.RemainingRecordContainer}>
                    <View style={styles.currentBalnceandRechargeContainer}>
                        <View style={styles.currentandreachargeOuterContainer}>
                            <View style={styles.accountandBalnceContainr}>
                                <Text style={styles.accountNumber}>0317 7454116</Text>
                                <View style={styles.currentBalnceContainer}>
                                    <Text style={styles.currenBalnceText}>170.08</Text>
                                    <Text style={styles.PKRStyle}> PKR</Text>
                                </View>
                                <Text style={styles.expireDateStyle}>Expires on 25th Apr, 2023</Text>
                            </View>
                            <View style={styles.rechargeContainer}>
                            </View>
                        </View>
                        <View style={styles.rechargeandadvanceContainer}>
                            <TouchableOpacity style={styles.reChargeButton}><Text style={styles.reChargeText}>Recharge</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.getadvanceButton}><Text style={styles.getAdvanceText}>Get Rs. 30</Text></TouchableOpacity>
                        </View>
                    </View>
  
                    <View style={styles.remainingPackageDetailsContainer}>
                        <TouchableOpacity style={styles.remainingMBcontainer}>
                            <Fontisto name="wifi" size={24} color="#8fc320" />
                            <View style={styles.remainingmbContainer}>
                                <Text style={styles.remainingMB}>5</Text>
                                <Text style={styles.MBstyle}> GB</Text>
                            </View>
                            <Text style={styles.remainingText}>remaining</Text>
                            <View style={styles.remainingIndicator}></View>
                            <Text style={styles.numberOfActiverOffers}>2 offers active</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.remainingMBcontainer}>
                            <Feather name="phone-call" size={24} color="#8fc320" />
                            <View style={styles.remainingmbContainer}>
                                <Text style={styles.remainingMB}>120</Text>
                                <Text style={styles.MBstyle}> MINS</Text>
                            </View>
                            <Text style={styles.remainingText}>remaining</Text>
                            <View style={styles.remainingIndicator}></View>
                            <Text style={styles.numberOfActiverOffers}>3 offers active</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.remainingMBcontainer}>
                            <MaterialCommunityIcons name="message-processing" size={24} color="#8fc320" />
                            <View style={styles.remainingmbContainer}>
                                <Text style={styles.remainingMB}>0</Text>
                                <Text style={styles.MBstyle}> SMS</Text>
                            </View>
                            <Text style={styles.remainingText}>remaining</Text>
                            <View style={styles.zeroremainingIndicator}></View>
                            <Text style={styles.numberOfActiverOffers}>0 offers active</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Image
                    style={styles.ownBundlecontainer}
                    source={require('../Images/ownbundle.jpg')}
                />
                <OfferSlider />
                <ServiceOffer />
             <PackageSlider />
             <Map />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom:90
    },
    RemainingRecordContainer: {
        height: 184,
        backgroundColor: 'white'
    },
    currentBalnceandRechargeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 18,
    },
    accountNumber: {
        fontSize: 12,
        color: '#7c7c7c'
    },
    currentBalnceContainer: {
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    currenBalnceText: {
        fontWeight: 'bold',
        fontSize: 32,
        color: '#e2006e'
    },
    PKRStyle: {
        fontSize: 22,
        fontWeight: '400'
    },
    expireDateStyle: {
        fontSize: 12,
        color: '#7c7c7c'
    },
    rechargeandadvanceContainer: {

    },
    reChargeButton: {
        height: 37,
        width: 106,
        borderColor: '#8fc320',
        borderWidth: 0.7,
        borderRadius: 27,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    },
    getadvanceButton: {
        height: 37,
        width: 106,
        borderColor: '#8fc320',
        borderWidth: 0.7,
        borderRadius: 27,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ec0180'
    },
    reChargeText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#8fc320'
    },
    getAdvanceText: {
        fontWeight: 'bold',
        color: 'white'
    },
    remainingMBcontainer: {
        height: 156,
        width: 100,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowRadius: 2,
        shadowColor: 'black',
        elevation: 8,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingBottom: 12,
        paddingTop: 9
    },
    remainingmbContainer: {
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    remainingMB: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#e2006e'
    },
    MBstyle: {
        fontWeight: '500'
    },
    remainingText: {
        fontSize: 12,
        color: '#7c7c7c'
    },
    remainingIndicator: {
        height: 3,
        width: 75,
        backgroundColor: '#ec0180'
    },
    zeroremainingIndicator: {
        height: 3,
        width: 75,
        backgroundColor: '#f299c5'
    },
    numberOfActiverOffers: {
        fontSize: 12,
        color: '#7c7c7c'
    },
    remainingPackageDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 12,
    },
    ownBundlecontainer: {
        height: 58,
        width: '92%',
        marginTop: 100,
        marginHorizontal: 12,
        borderRadius: 15,
    },




});

export default HomeScreen;