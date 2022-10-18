import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons, FontAwesome5, SimpleLineIcons, Feather } from '@expo/vector-icons';

const Photos = () => {
    const [isSelected, setIsSelected]= useState(false)
    const [gridOn, setGridon ] = useState(true)
  return (
    <View>
        <View style={{ flexDirection:'row', marginTop: 6}}>
            <View style={[styles.case, gridOn ? styles.underline: null]}>
                <MaterialCommunityIcons name="grid" color={'grey'} size={26} onPress={()=> { setGridon(true); setIsSelected(false)}} 
                style={[styles.icons, gridOn?styles.light: null ]}
                />
            </View>
            <View style={[styles.case, isSelected? styles.underline: null]}>
                <FontAwesome5 name="user-friends" color={'grey'} size={26} onPress={()=>{setGridon(false); setIsSelected(true)} } 
                style={[styles.icons, isSelected?styles.light: null ]}
                />
            </View>
        </View>
        {gridOn? <PostPhotos /> : <TagPhotos />}
    </View>
  )
}


const PostPhotos = () =>  {
    return(
        <View style={{ alignItems: 'center', marginTop: 55}}>
            <View style={styles.circle}>
                <SimpleLineIcons name="camera" size={30} color="white" />
            </View>
            <Text style={{ color: 'white', fontWeight:'700', fontSize:32}}>No posts yet</Text>
        </View>
    )
}

const TagPhotos = () =>  {
    return(
        <View style={{ alignItems: 'center', marginTop: 55}}>
            <View style={styles.circle}>
                <Feather name="hash" size={32} color="white" />
            </View>
            <Text style={{ color: 'white', fontWeight:'700', fontSize:32}}>No mentions yet</Text>
        </View>
    )
}





export default Photos

const styles = StyleSheet.create({
    icons:{
        marginBottom: 8
    },
    light: {
        color:'white',
    },
    case: {
        width: '50%',
        alignItems: 'center'
    },
    underline: {
        borderColor: 'white',
        borderBottomWidth: 1
    },
    circle:{ 
        width: 100, 
        height: 100, 
        borderRadius: '50%', 
        borderWidth: 1, 
        borderColor: 'white', 
        justifyContent:'center',
        alignItems: 'center'
    }
})