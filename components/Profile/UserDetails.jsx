import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'

const UserDetails = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View>
            <Image source={{ uri : `${USERS[1].image}`}} style={styles.profile}/>
            <Text style={styles.text}>Software Engineer</Text>
            <Text style={styles.text}>Fullstack Developer</Text>
            <Text style={styles.text}>Mobile Developer</Text>
            <Text style={styles.text}>Music Lover</Text>
        </View>
        <View style={{ flexDirection: 'row' , width: '55%', alignSelf:'center',}}>
                <View style={{ marginRight: 25}}>
                    <Text style={[styles.rating, {fontSize:20, fontWeight: 'bold'}]}>8</Text>
                    <Text style={styles.rating}>Posts</Text>
                </View>
                <View style={{ marginRight: 25}}>
                    <Text style={[styles.rating, {fontSize:20, fontWeight: 'bold'}]}>10,000</Text>
                    <Text style={styles.rating}>Followers</Text>
                </View>
                <View>
                    <Text style={[styles.rating, {fontSize:20, fontWeight: 'bold'}]}>2000</Text>
                    <Text style={styles.rating}>Following</Text>
                </View>
        </View>
    </View>
  )
}

export default UserDetails

const styles = StyleSheet.create({
    profile:{
        width: 100, 
        height: 100,
        borderRadius:'50%',
        borderWidth: 2.5,
        borderColor: '#ff8530',
        marginBottom: 5
    },
    text: {
        color: 'white',
        fontSize: 16
    },
    rating: {
        color: 'white',
        textAlign: 'center',
    }
})
