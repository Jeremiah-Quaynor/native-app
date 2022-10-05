import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 


const AddNewPost = () => (
    <View style={styles.container}>
        <Header />
    </View>
)


const Header = ()=> (   
    <View style={styles.headerContainer}>
        <TouchableOpacity>
            <Ionicons name="chevron-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>NEW POST</Text>
        <Text/>
</View>
)




const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,

    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
        // marginRight:
    }
})

export default AddNewPost