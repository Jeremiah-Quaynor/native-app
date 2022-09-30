import React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";


const Cover =()=> {
    let isDark = false

    return(
        <View >
            <SafeAreaView style={styles.cover }>
            {/* <SafeAreaView style={`${styles.cover} ${isDark ? styles.darkTheme : styles.lightTheme}`}> */}
            <Image 
                style={styles.img}
                source={require('../assets/whatsapp-removebg-preview.png')} />
            </SafeAreaView>
        </View>

    )
}

export default Cover


const styles = StyleSheet.create({
    darkTheme: {
        backgroundColor: 'black',
    },
    lightTheme: {
        backgroundColor: 'white',
    },
    cover: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    },
    img: {
        width: 100,
        height:100,
        marginVertical: "80%",
        alignSelf: 'center',
        justifySelf: 'center',
    }
})