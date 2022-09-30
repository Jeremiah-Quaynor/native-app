import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Image source={require("../../assets/header-logo.png")}
                style={StyleSheet.logo}/>
        </TouchableOpacity>

        <View style={styles.icons}>
            <TouchableOpacity>
                <Image 
                    source={{
                        uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'
                    }} 
                    style={styles.icon}
                    />
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Image 
                    source={{
                        uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png'
                    }} 
                    style={styles.icon}
                    />
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.unreadBadge}>
                    <Text style= {styles.unreadBadgeText}>15</Text>
                </View>
                <Image 
                    source={{
                        uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png'
                    }} 
                    style={styles.icon}
                    />
            </TouchableOpacity>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },  
    logo: {
        width: 150,
        height: 90,
        resizeMode: 'contain'
    },
    icons: {
        flexDirection:'row',
    },
    icon: {
        width:30,
        height: 30,
        marginLeft: 10,
        resizeMode: 'contain'
    },
    unreadBadge: {
        backgroundColor: 'red',
        position: 'absolute',
        left: 20,
        bottom: 18,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems:'center',
        justifyContent: 'center',
        zIndex: 100
    },
    unreadBadgeText: {
        color: 'white',
        fontWeight: '600'
    }
})

export default Header