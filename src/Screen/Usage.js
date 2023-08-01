import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Header from "../Components/Header";
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const DATA = [
    {
      id: '1',
      Packagetitle: 'Weekly 5GB',
      Expirydate: 'Expire on 17-Jan-2023',
      BundlesDetails:'Weekly Internet Bundles Details',
      Used:'5000/5000 MBs'

    },
    {
        id: '2',
        Packagetitle: 'Super Call Offer',
        Expirydate: 'Expire on 23-Jan-2023',
        BundlesDetails:'Super Calls Bundles Details',
        Used:'120/120 MINS'
    },
   
  ];
const Usage = () => {
    return (
        <View style={styles.container}>
            <Header
                screentitle="Bundles"
            />
            <View style={styles.remainbundlesDetails}>
                <TouchableOpacity style={styles.remainingMBcontainer}>
                    <Fontisto name="wifi" size={24} color="#8fc320" />
                    <Text style={styles.packageType}>Internet</Text>
                    <View style={styles.remainingmbContainer}>
                        <Text style={styles.remainingMB}>5</Text>
                        <Text style={styles.MBstyle}> GB</Text>
                    </View>
                    <Text style={styles.remainingText}>remaining</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.remainingMBcontainer}>
                    <Feather name="phone-call" size={24} color="#8fc320" />
                    <Text style={styles.packageType}>Call</Text>
                    <View style={styles.remainingmbContainer}>
                        <Text style={styles.remainingMB}>120</Text>
                        <Text style={styles.MBstyle}> MINS</Text>
                    </View>
                    <Text style={styles.remainingText}>remaining</Text>
                </TouchableOpacity>
            </View>
            
           <View style={styles.subscriptiondetailscontainer}>
                <Text style={styles.subscriptionText}>Subscription Details</Text>
                <FlatList
        data={DATA}
        renderItem={({item})=>(
                <View style={styles.mbDetailsContainer}>
                    <View style={styles.UsageNameandexpireContainer}>
                        <Text style={styles.PackageNameText}>{item.Packagetitle}</Text>
                        <Text style={styles.PackageExpiry}>{item.Expirydate}</Text>
                    </View>
                    <View style={styles.InnerdetailsContainer}>
                        <View>
                            <Text style={{ fontWeight: '500', fontSize: 13 }}>{item.BundlesDetails}</Text>
                            <Text style={{ fontSize: 9, color: '#7c7c7c' }}>5000/5000 MBs</Text>
                        </View>
                        <View style={styles.percntageusedContainer}>
                            <View style={styles.zeroremainingIndicator}></View>
                            <Text style={{ fontSize: 9, color: '#7c7c7c' }}>{item.Used}</Text>
                        </View>
                    </View>
                    <View style={styles.lastinnerContainer}>
                        <MaterialCommunityIcons name="star-box" size={32} color="#7c7c7c" />
                        <TouchableOpacity style={styles.unscribeButton}><Text style={{ fontWeight: 'bold', color: 'white' }}>Unsubscribe</Text></TouchableOpacity>
                    </View>
                </View> )}
 keyExtractor={item => item.id}
        
 />
            </View>
        
       
            
        </View>
    )
};
const styles = StyleSheet.create({
    remainbundlesDetails: {
        flexDirection: 'row'
    },
    packageType: {
        fontSize: 13
    },
    remainingMBcontainer: {
        height: 120,
        width: 100,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowRadius: 0.5,
        shadowColor: 'black',
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingBottom: 12,
        paddingTop: 9,
        marginVertical: 18,
        marginLeft: 18
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
    },
    subscriptiondetailscontainer: {
        marginHorizontal: 18,
    },
    subscriptionText: {
        marginVertical: 18
    },

    mbDetailsContainer: {
        height: 140,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: 'black',
        elevation: 4,
        shadowRadius: 0.5,
        paddingHorizontal: 18,
        marginBottom:13
    },
    PackageNameText: {
        fontWeight: 'bold',
        marginTop: 14,
    },
    PackageExpiry: {
        fontSize: 11,
        color: '#7c7c7c',
        marginBottom: 16,
    },
    zeroremainingIndicator: {
        height: 3,
        width: 75,
        backgroundColor: '#f299c5'
    },
    InnerdetailsContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between'
    },
    percntageusedContainer: {
        alignItems: 'flex-end'
    },
    lastinnerContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6
    },
    unscribeButton: {
        height: 27,
        width: 250,
        backgroundColor: '#8fc320',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    }
});
export default Usage;
