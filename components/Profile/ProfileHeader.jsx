import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'

const ProfileHeader = ({navigation}) => {
  return (
    <SafeAreaView style={{ flexDirection: 'row', justifyContent:'space-between', marginHorizontal: 14, marginBottom: 20}}>
        <View >
            <TouchableOpacity>
                <Text style={{ color: 'white' , fontSize:'30', fontWeight:'bold'}}>Jonakote
                <MaterialCommunityIcons name="menu-down" size={24} color="white" />
                </Text>
            </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row'}}>
        <TouchableOpacity onPress={()=> navigation.push('NewPost')}>
                <Image 
                    source={{
                        uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'
                    }} 
                    style={styles.icon}
                    />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="ios-menu" size={30} color="white" style={{ marginLeft: 10}}/>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default ProfileHeader

const styles = StyleSheet.create({
  icon: {
    width:30,
    height: 30,
    marginLeft: 10,
    resizeMode: 'contain'
}
})