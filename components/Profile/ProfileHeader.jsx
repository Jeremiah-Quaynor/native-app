import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ProfileHeader = () => {
  return (
    <SafeAreaView style={{ flexDirection: 'row', justifyContent:'space-between', marginHorizontal: 14, marginBottom: 20}}>
        <View >
            <TouchableOpacity>
                <Text style={{ color: 'white' , fontSize:'30', fontWeight:'bold'}}>Jonakote</Text>
            </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row'}}>
            <Text style={{ color: 'white' , fontSize:'30', borderColor: 'white', borderWidth: 2}}>+</Text>
            <Text style={{ color: 'white' , fontSize:'30',marginLeft:15 , borderColor: 'white', borderWidth: 2}}>🀄</Text>
        </View>
    </SafeAreaView>
  )
}

export default ProfileHeader

const styles = StyleSheet.create({})