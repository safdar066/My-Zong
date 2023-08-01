import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const Header = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.aboveHeaderContainer}>

            </View>
            <View style={styles.Header}>
                <View style={styles.rightBellContainer}>
                    <Ionicons name="ios-notifications-sharp" size={24} color="white" />
                </View>
                <View style={styles.middleTextContainer}>
                    <Text style={styles.usernameStyle}>{props.screentitle}</Text>
                </View>
                <View style={styles.left3IconsContainer}>
                <Ionicons name="search" size={24} color="white" />
                <MaterialIcons name="refresh" size={24} color="white" 
                style={{paddingHorizontal:4}}
                />
                <Entypo name="menu" size={24} color="white" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    aboveHeaderContainer: {
        height: 30,
        backgroundColor: '#00584c',
        
    },
    Header: {
        height: 53,
        backgroundColor: '#8fc320',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:13,
        alignItems:'center'
    },
    usernameStyle: {
        color: 'white',
        fontWeight:'bold',
        fontSize:18,
    },
    left3IconsContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
});

export default Header;