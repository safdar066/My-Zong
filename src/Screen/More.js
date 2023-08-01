import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

import React, { useState } from 'react';

import Header from "../Components/Header";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const More = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [showContent, setShowContent] = useState(true);
    const [showContent2, setShowContent2] = useState(false);
    const [showContent3, setShowContent3] = useState(false);
    const [showContent4, setShowContent4] = useState(false);
    const [showContent5, setShowContent5] = useState(false);
    const [showContent6, setShowContent6] = useState(false);
    const [showContent7, setShowContent7] = useState(false);
    return (
        <View style={styles.container}>
            <Header
                screentitle="More"
            />
            <ScrollView 
            showsVerticalScrollIndicator={false}

            style={styles.mainContainer}>
                <Text style={styles.catagoryText}>Please Select from the following categories</Text>
                <View style={{ ...styles.packageanddataSimContainer, }}>
                    {show ? <TouchableOpacity
                        onPress={() => { setShow(!show), setShowContent(!showContent) }}
                        style={styles.packageTextContainer}>
                        <Text style={styles.packagesText}>Packages & Data SIMs</Text>
                        <AntDesign name="downcircleo" size={22} color="#94908f" />
                    </TouchableOpacity> : <TouchableOpacity
                        onPress={() => { setShow(!show), setShowContent(!showContent) }}
                        style={styles.packageTextContainer}>
                        <Text style={styles.packagesText}>Packages & Data SIMs</Text>
                        <AntDesign name="upcircleo" size={22} color="#94908f" />
                    </TouchableOpacity>
                    }
                    {showContent ? <View><View style={styles.packagecontainerfirstRow}>
                        <View style={styles.packageContainer}>
                            <Feather name="package" size={50} color="#8fc320" />
                            <Text style={styles.packgesText}>Packages</Text>
                        </View>
                        <View style={styles.packageContainer}>
                            <SimpleLineIcons name="globe" size={50} color="#8fc320" />
                            <Text style={styles.packgesText}>Internet SIM</Text>
                        </View>
                        <View style={styles.packageContainer}>
                            <Foundation name="mobile-signal" size={50} color="#8fc320" />
                            <Text style={styles.packgesText}>MBB</Text>
                        </View>
                    </View>
                        <View style={styles.packageContainerlast}>
                            <Fontisto name="suitcase" size={50} color="#8fc320" />
                            <Text style={styles.packgesText}>Zong Club</Text>
                        </View>
                    </View> : <View />
                    }
                </View>
                <View style={{ ...styles.packageanddataSimContainer, }}>
                    {show2 ? <TouchableOpacity
                        onPress={() => { setShow2(!show2), setShowContent2(!showContent2) }}
                        style={styles.packageTextContainer}>
                        <Text style={styles.packagesText}>International Roaming & IDD</Text>
                        <AntDesign name="upcircleo" size={22} color="#94908f" />
                    </TouchableOpacity> : <TouchableOpacity
                        onPress={() => { setShow2(!show2), setShowContent2(!showContent2) }}
                        style={styles.packageTextContainer}>
                        <Text style={styles.packagesText}>International Roaming & IDD</Text>
                        <AntDesign name="downcircleo" size={22} color="#94908f" />
                    </TouchableOpacity>
                    }
                    {showContent2 ?<View style={{...styles.packagecontainerfirstRow, justifyContent:'flex-start'}}>
                        <View style={styles.packageContainer}>            
                            <Ionicons name="globe-outline" size={50} color="#8fc320" />
                            <Text style={styles.packgesText}>IDD</Text>
                        </View>
                        <View style={styles.packageContainer}>
                            <SimpleLineIcons name="globe" size={50} color="#8fc320" />
                            <Text style={styles.packgesText}>IR</Text>
                        </View>
                    </View>                       
                    : <View />
                    }
                </View>
                <View style={{ ...styles.packageanddataSimContainer, }}>
                    {show3 ? <TouchableOpacity
                        onPress={() => { setShow3(!show3), setShowContent3(!showContent3) }}
                        style={styles.packageTextContainer}>
                        <Text style={styles.packagesText}>Value Added Services</Text>
                        <AntDesign name="upcircleo" size={22} color="#94908f" />
                    </TouchableOpacity> : <TouchableOpacity
                        onPress={() => { setShow3(!show3), setShowContent3(!showContent3) }}
                        style={styles.packageTextContainer}>
                        <Text style={styles.packagesText}>Value Added Services</Text>
                        <AntDesign name="downcircleo" size={22} color="#94908f" />
                    </TouchableOpacity>
                    }
                    {showContent3 ? <View><View style={styles.packagecontainerfirstRow}>
                        <View style={styles.packageContainer}>
                        <MaterialIcons name="call-end" size={50} color="#8fc320"/>
                            <Text style={styles.packgesText}>MCA</Text>
                        </View>
                        <View style={styles.packageContainer}>
                        <FontAwesome5 name="itunes-note" size={50} color="#8fc320"  />
                            <Text style={styles.packgesText}>Dial Tunes</Text>
                        </View>
                        <View style={styles.packageContainer}>
                        <Feather name="message-square" size={50} color="#8fc320" />
                            <Text style={styles.packgesText}>My Status</Text>
                        </View>
                    </View>
                    <View style={styles.packagecontainerfirstRow}>
                        <View style={styles.packageContainerlast}>
                            <MaterialIcons name="sports-cricket" size={50} color="#8fc320" />
                            <Text style={styles.packgesText}>Cricket</Text>
                            <Text style={styles.packgesText}>Services</Text>
                        </View>
                        <View style={styles.packageContainerlast}>
                            <MaterialIcons name="mobile-friendly"  size={50} color="#8fc320" />
                            <Text style={styles.packgesText}>Intero Me</Text>
                        </View>
                        <View style={styles.packageContainerlast}>
                        <Zocial name="itunes" size={50} color="#8fc320"/>
                            <Text style={styles.packgesText}>My Tune</Text>
                        </View>
                        </View>
                    </View> : <View />
                    }

                </View>
                <View style={{ ...styles.packageanddataSimContainer, }}>
                    {show4 ? <TouchableOpacity
                        onPress={() => { setShow4(!show4), setShowContent4(!showContent4) }}
                        style={styles.packageTextContainer}>
                        <Text style={styles.packagesText}>Apps & Games</Text>
                        <AntDesign name="upcircleo" size={22} color="#94908f" />
                    </TouchableOpacity> : <TouchableOpacity
                        onPress={() => { setShow4(!show4), setShowContent4(!showContent4) }}
                        style={styles.packageTextContainer}>
                        <Text style={styles.packagesText}>Apps & Games</Text>
                        <AntDesign name="downcircleo" size={22} color="#94908f" />
                    </TouchableOpacity>
                    }
                    {showContent4 ?<View style={{...styles.packagecontainerfirstRow, justifyContent:'flex-start'}}>
                        <View style={styles.packageContainer}>    
                        <Ionicons name="game-controller-outline" size={50} color="#8fc320" />        
                            <Text style={styles.packgesText}>IDD</Text>
                        </View>
                        
                    </View>                       
                    : <View />
                    }
                </View>
                <View style={{ ...styles.packageanddataSimContainer, }}>
                    {show5 ? <TouchableOpacity
                        onPress={() => { setShow5(!show5), setShowContent5(!showContent5) }}
                        style={styles.packageTextContainer}>
                        <Text style={styles.packagesText}>Rewards</Text>
                        <AntDesign name="upcircleo" size={22} color="#94908f" />
                    </TouchableOpacity> : <TouchableOpacity
                        onPress={() => { setShow5(!show5), setShowContent5(!showContent5) }}
                        style={styles.packageTextContainer}>
                        <Text style={styles.packagesText}>Rewards</Text>
                        <AntDesign name="downcircleo" size={22} color="#94908f" />
                    </TouchableOpacity>
                    }
                    {showContent5 ?<View style={{...styles.packagecontainerfirstRow, justifyContent:'flex-start'}}>
                        <View style={styles.packageContainer}>    
                        <Feather name="gift" size={50} color="#8fc320" />      
                            <Text style={styles.packgesText}>Daily</Text>
                            <Text style={styles.packgesText}>rewards</Text>
                        </View>
                        
                    </View>                       
                    : <View />
                    }
                </View>
                <View style={{ ...styles.packageanddataSimContainer, }}>
                    {show6 ? <TouchableOpacity
                        onPress={() => { setShow6(!show6), setShowContent6(!showContent6) }}
                        style={styles.packageTextContainer}>
                        <Text style={styles.packagesText}>History Details</Text>
                        <AntDesign name="upcircleo" size={22} color="#94908f" />
                    </TouchableOpacity> : <TouchableOpacity
                        onPress={() => { setShow6(!show6), setShowContent6(!showContent6) }}
                        style={styles.packageTextContainer}>
                        <Text style={styles.packagesText}>History Details</Text>
                        <AntDesign name="downcircleo" size={22} color="#94908f" />
                    </TouchableOpacity>
                    }
                    {showContent6 ?<View style={{...styles.packagecontainerfirstRow, justifyContent:'flex-start'}}>
                        <View style={styles.packageContainer}>  
                        <MaterialCommunityIcons name="certificate-outline" size={50} color="#8fc320" />          
                            <Text style={styles.packgesText}>Tax</Text>
                            <Text style={styles.packgesText}>Certification</Text>
                        </View>
                        <View style={styles.packageContainer}>
                            <MaterialIcons name="history" size={50} color="#8fc320" />
                            <Text style={styles.packgesText}>200MB</Text>
                            <Text style={styles.packgesText}>Rewards</Text>
                            <Text style={styles.packgesText}>History</Text>
                        </View>
                        <View style={styles.packageContainer}>
                            <MaterialCommunityIcons name="history" size={50} color="#8fc320" />
                            <Text style={styles.packgesText}>Brief History</Text>
                        </View>
                    </View>                       
                    : <View />
                    }
                </View>
                <View style={{ ...styles.packageanddataSimContainer, marginBottom:100}}>
                    {show7 ? <TouchableOpacity
                        onPress={() => { setShow7(!show7), setShowContent7(!showContent7) }}
                        style={styles.packageTextContainer}>
                        <Text style={styles.packagesText}>Miscellaneous</Text>
                        <AntDesign name="upcircleo" size={22} color="#94908f" />
                    </TouchableOpacity> : <TouchableOpacity
                        onPress={() => { setShow7(!show7), setShowContent7(!showContent7) }}
                        style={styles.packageTextContainer}>
                        <Text style={styles.packagesText}>Miscellaneous</Text>
                        <AntDesign name="downcircleo" size={22} color="#94908f" />
                    </TouchableOpacity>
                    }
                    {showContent7 ? <View><View style={styles.packagecontainerfirstRow}>
                        <View style={styles.packageContainer}>
                        <Feather name="phone-call"  size={50} color="#8fc320" />
                            <Text style={styles.packgesText}>Caller Name</Text>
                        </View>
                        <View style={styles.packageContainer}>
                        <Ionicons name="ios-call-outline" size={50} color="#8fc320" />
                            <Text style={styles.packgesText}>Call</Text>
                            <Text style={styles.packgesText}>Screening</Text>
                        </View>
                        <View style={styles.packageContainer}>
                        <FontAwesome5 name="donate" size={50} color="#8fc320" />
                            <Text style={styles.packgesText}>Loan</Text>
                        </View>
                    </View>
                    <View style={styles.packagecontainerfirstRow}>
                        <View style={styles.packageContainer}>
                        <MaterialCommunityIcons name="new-box" size={50} color="#8fc320"/>
                            <Text style={styles.packgesText}>Latest</Text>
                        </View>
                        <View style={styles.packageContainer}>
                            <SimpleLineIcons name="globe" size={50} color="#8fc320" />
                            <Text style={styles.packgesText}>Shop</Text>
                        </View>
                        <View style={styles.packageContainer}>
                        <AntDesign name="shoppingcart" size={50} color="#8fc320" />
                            <Text style={styles.packgesText}>Info Services</Text>
                        </View>
                    </View>
                    </View> : <View />
                    }
                </View>
                

            </ScrollView>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {

    },
    mainContainer: {
        marginHorizontal: 18,
    },
    catagoryText: {
        fontSize: 16,
        marginVertical: 25,
    },
    packageanddataSimContainer: {
        backgroundColor: 'white',
        borderRadius: 15,
        paddingHorizontal: 15,
        marginBottom: 12

    },
    packageTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 22,
        height: 30,


    },
    packagesText: {
        fontWeight: '450',
        fontSize: 16,
    },
    packagecontainerfirstRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    packageContainer: {
        height: 112,
        width: 90,
        shadowColor: 'black',
        borderRadius: 15,
        backgroundColor: 'white',
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        marginBottom:26,
    },
    packageContainerlast: {
        height: 112,
        width: 90,
        shadowColor: 'black',
        borderRadius: 15,
        backgroundColor: 'white',
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
    },
    packgesText: {
        fontWeight: '400',
    }
});
export default More;
