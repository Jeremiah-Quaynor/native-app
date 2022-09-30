import React from "react";
import { Button, SafeAreaView, StyleSheet, View, Text } from "react-native";


const Home =()=> {
    // let isDark = true;

    return(
        < SafeAreaView  style={styles.home}>
            <View style={styles.top}>
                <Button title="Edit" styles={styles.btn}/>
                <Button title="🖊️" styles={styles.btn}/>
            </View>
            <Text style={styles.titleText}>Chats</Text>
            <View style={styles.middle}>
                <Button title="Broadcast Lists" styles={styles.btn}/>
                <Button title="New Group" styles={styles.btn}/>
            </View>
            <Text style={styles.encrypted}>🔒Your personal messages are 
            <Text style={styles.span} > end-to-end encrypted</Text></Text>
        </SafeAreaView >
    )
}

export default Home;



const styles = StyleSheet.create({    
    darkTheme: {
        backgroundColor: 'black',
        color: 'white'
    },
    lightTheme: {
        backgroundColor: 'white',
        color: 'black'

    },
    home: {
        width: '100%',
        height:'100%',
        backgroundColor: 'black'
    },
    top:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 10
    },
    btn: {
        fontSize: 36,
    },
    titleText: {
        fontSize: 36,
        fontWeight: "bold",
        color: 'white',
        marginLeft: 27,
        marginTop:10
    },
    middle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 8,
        paddingBottom: 8,
        borderBottomWidth: 0.3,
        borderBottomColor: 'gray'
    },
    encrypted: {
        color: 'white',
        fontSize: 13,
        marginTop:20,
        textAlign: 'center'
    },
    span: {
        color: '#34BAFF'
    }

})
