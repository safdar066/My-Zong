import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, FlatList } from "react-native";
import Header from "../Components/Header";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DATA = [
    {
      id: '1',
      packagetitle: 'Monthely Pro Plus',
      packageduration: '30 days',
      packageprice: '1249PKR',
      packageminutes: '10000',
      packageminutesText: 'Zong Mins',
      packageoffnetminutes: '600',
      packageoffnetminutesText: 'Off-net Mins',
      packagesms: '10000',
      packagesmsText: 'SMS',
      packagemb: '60GB',
      packagembText: 'Internet',

    },
    {
        id: '2',
        packagetitle: 'Weekly AIO',
        packageduration: '7 days',
        packageprice: '220PKR',
        packageminutes: '5000',
        packageminutesText: 'Zong Mins',
        packageoffnetminutes: '60',
        packageoffnetminutesText: 'Off-net Mins',
        packagesms: '5000',
        packagesmsText: 'SMS',
        packagemb: '4GB',
        packagembText: 'Internet',
  
      },
      {
        id: '3',
        packagetitle: 'Weekly PRO',
        packageduration: '7 days',
        packageprice: '399PKR',
        packageminutes: '5000',
        packageminutesText: 'Zong Mins',
        packageoffnetminutes: '250',
        packageoffnetminutesText: 'Off-net Mins',
        packagesms: '5000',
        packagesmsText: 'SMS',
        packagemb: '40GB',
        packagembText: 'Internet',
  
      },
      {
        id: '4',
        packagetitle: 'Monthely Super Card',
        packageduration: '30 days',
        packageprice: '749PKR',
        packageminutes: '5000',
        packageminutesText: 'Zong Mins',
        packageoffnetminutes: '250',
        packageoffnetminutesText: 'Off-net Mins',
        packagesms: '5000',
        packagesmsText: 'SMS',
        packagemb: '10GB',
        packagembText: 'Internet',
  
      },
      {
        id: '5',
        packagetitle: 'Monthely Super',
        packageduration: '30 days',
        packageprice: '1299PKR',
        packageminutes: '20GB',
        packageminutesText: 'Internet',
        packageoffnetminutes: '4GB',
        packageoffnetminutesText: 'Whatsapp',
        packagesms: '5000',
        packagesmsText: 'SMS',
        packagemb: '6GB',
        packagembText: 'Youtube',
  
      },
      {
        id: '6',
        packagetitle: 'Monthely Supereme',
        packageduration: '30 days',
        packageprice: '999PKR',
        packageminutes: '5000',
        packageminutesText: 'Zong Mins',
        packageoffnetminutes: '350',
        packageoffnetminutesText: 'Off-net Mins',
        packagesms: '5000',
        packagesmsText: 'SMS',
        packagemb: '20GB',
        packagembText: 'Internet',
  
      },
      {
        id: '7',
        packagetitle: 'Monthely pro',
        packageduration: '30 days',
        packageprice: '1249PKR',
        packageminutes: '10000',
        packageminutesText: 'Zong Mins',
        packageoffnetminutes: '600',
        packageoffnetminutesText: 'Off-net Mins',
        packagesms: '10000',
        packagesmsText: 'SMS',
        packagemb: '40GB',
        packagembText: 'Internet',
  
      },
      {
        id: '8',
        packagetitle: 'Shandar Haftawar Offer',
        packageduration: '7 days',
        packageprice: '158PKR',
        packageminutes: '500',
        packageminutesText: 'Zong Mins',
        packageoffnetminutes: '40',
        packageoffnetminutesText: 'Off-net Mins',
        packagesms: '500',
        packagesmsText: 'SMS',
        packagemb: '500MB',
        packagembText: 'Internet',
  
      },
      {
        id: '9',
        packagetitle: 'Shandar Mahana Offer',
        packageduration: '30 days',
        packageprice: '420PKR',
        packageminutes: '1000',
        packageminutesText: 'Zong Mins',
        packageoffnetminutes: '100',
        packageoffnetminutesText: 'Off-net Mins',
        packagesms: '1000',
        packagesmsText: 'SMS',
        packagemb: '1000MB',
        packagembText: 'Internet',
  
      },
  ];
const Bundles = ()=>{
    return(
        <View style={styles.container}>
          <Header 
          screentitle="Bundles"
          />
          <View style={styles.mainContainer}>
          <View style={styles.horizontupperContainer}>
            <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalinnercontainer}>
            <TouchableOpacity><Text style={styles.horizontalText}>Rs. 10 Shop</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.horizontalText}>Top Offers</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.horizontalText}>All-In-One</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.horizontalText}>Data</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.horizontalText}>Stay-At-Home</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.horizontalText}>Social</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.horizontalText}>SMS</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.horizontalText}>Regional Offers</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.horizontalText}>Favourites</Text></TouchableOpacity>
            </ScrollView>

          </View>
          <View style={styles.sortingbyduration}>
            <View style={styles.innerdurationConatiner}>
                    <Text style={styles.durationText}>Monthely</Text>
                    <Text style={styles.durationText}>Weekly</Text>
                    <Text style={styles.durationText}>Daily</Text>
            </View>
            <Text style={styles.filterText}>Filter by</Text>
            <MaterialCommunityIcons 
            style={{marginRight:8}}
            name="sort" size={29} color="#e2006e" />
          </View>
        </View>
        <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({item})=>(
<View style={styles.packageContainer}>
        <View style={styles.packagenameContainer}>
            <View>
                <Text style={styles.packagenameanddate}>{item.packagetitle}</Text>
                <Text style={styles.innerdurationText}>{item.packageduration}</Text>
            </View>
            <View style={styles.leftContainer}>
                <Text style={styles.priceText}>{item.packageprice}</Text>
                <Text style={styles.rechargedrequireText}>Recharged Required</Text>
            </View>

        </View>
        <View style={styles.packageIncludingContainer}>
            <View style={styles.zongminutescontainer}>
                <Text style={styles.totalminutesText}>{item.packageminutes}</Text>
                <Text style={styles.zongminutesText}>{item.packageminutesText}</Text>
            </View>
            <View style={styles.zongminutescontainer}>
                <Text style={styles.totalminutesText}>{item.packageoffnetminutes}</Text>
                <Text style={styles.zongminutesText}>{item.packageoffnetminutesText}</Text>
            </View>
            <View style={styles.zongminutescontainer}>
                <Text style={styles.totalminutesText}>{item.packagesms}</Text>
                <Text style={styles.zongminutesText}>{item.packagesmsText}</Text>
            </View>
            <View style={styles.zongminutescontainer}>
                <Text style={styles.totalminutesText}>{item.packagemb}</Text>
                <Text style={styles.zongminutesText}>{item.packagembText}</Text>
            </View>
        </View>
        <View style={styles.lastinnerContainer}>
                        <MaterialCommunityIcons name="star-box" size={32} color="#7c7c7c" />
                        <TouchableOpacity style={styles.unscribeButton}><Text style={{ fontWeight: 'bold', color: 'white' }}>Subscribe now</Text></TouchableOpacity>
                    </View>
        </View>
        )}
        keyExtractor={item => item.id}
        
      />
      
        
        </View>
    )
};
const styles = StyleSheet.create({
    container:{
        marginBottom:200
    },
    mainContainer:{
        marginHorizontal:18
    },
    packageContainer: {
        height: 202,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: 'black',
        elevation: 4,
        shadowRadius: 0.5,
        paddingHorizontal: 18,
        marginBottom:13,
        marginHorizontal:18
    },
    packagenameContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:27,
        marginBottom:18,

    },
    leftContainer:{
        alignItems:'flex-end'
    },
    packagenameanddate:{
        fontWeight:'470'
    },
    priceText:{
        color:'#8fc320'
    },
    rechargedrequireText:{
        fontSize:12,
        color:'#706f6f'
    },
    packageIncludingContainer:{
        flexDirection:'row'
    },
    totalminutesText:{
        fontWeight:'500'
    },
    zongminutescontainer:{
        height:65,
        width:70,
        backgroundColor:'white',
        elevation:2,
        justifyContent:'center',
        alignItems:'center'
    },
    lastinnerContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 13
    },
    unscribeButton: {
        height: 27,
        width: 250,
        backgroundColor: '#e2006e',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    zongminutesText:{
        fontSize:9,
        color:'#757474'
    },

    horizontupperContainer:{
        height:45,
        backgroundColor:'white',
        marginVertical:20,
        elevation:3,
        borderRadius: 8,
        paddingVertical:14,
        paddingHorizontal:14
        
    },
    horizontalinnercontainer:{
        flexDirection:'row',
        alignContent:'center',
        textAlign:'center'
    },
    horizontalText:{
        fontSize:13,
        marginHorizontal:14,
        
        
    },
    sortingbyduration:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    innerdurationConatiner:{
        flexDirection:'row',
        height:25,
        width:210,
        backgroundColor:'white',
        justifyContent:'space-between',
        paddingHorizontal:16,
        alignItems:'center',
        borderRadius:18
    },
    durationText:{
        color:'#e2006e'
    },
    filterText:{
        color:'#e2006e',
        fontSize:18,
        fontWeight:'350'
    },
    innerdurationText:{
        color:'#8c8c8c',
        fontSize:12
    },

});
export default Bundles;
