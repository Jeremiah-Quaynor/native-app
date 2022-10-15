import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const EditSection = () => {
  return (
    <View>
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', marginVertical: 15}}>
            <TouchableOpacity style={{width: '80%'}}>
                <Text style={styles.edit}>Edit profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '10%'}}>
                <Ionicons name="md-person-add-outline" size={14} color="white" style={styles.add}/>
            </TouchableOpacity>
        </View>
        <StoryHighlights />
    </View>
  )
}

export default EditSection


const StoryHighlights =() => (
    <TouchableOpacity style={{ flexDirection: 'row', justifyContent:'space-between', marginHorizontal:10, marginVertical: 10}}>
        <Text style={{ color: 'white', fontSize:40}}>Story highlights</Text>
        <MaterialCommunityIcons name="menu-down" size={24} color="white" />
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    edit: {
        textAlign:'center',
        color: 'white',
        backgroundColor: '#2c2e2d',
        fontWeight: 'bold',
        padding: 8,
    },
    add:{
        backgroundColor: '#2c2e2d',
        alignSelf: 'center',
        padding: 8,


    }
})