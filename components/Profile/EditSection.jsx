import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Hightlights } from '../../data/highlights';
import { Divider } from 'react-native-elements';

const Plus = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyJ5WnG_xNmzBgxpy224UtJKA1kOmymxYoThFBkw&s'

const EditSection = () => {

  return (
    <View>
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', marginVertical: 10}}>
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


const StoryHighlights =() => {
    const [isToggled, setIsToggled] = useState(true)

    return(
    <>
        <TouchableOpacity 
        onPress={()=> setIsToggled(!isToggled)}
        style={{ flexDirection: 'row', justifyContent:'space-between', marginHorizontal:14, marginTops: 4}}>
            <Text style={{ color: 'white', fontSize:17}}>Story highlights</Text>
            {isToggled? 
            <MaterialCommunityIcons name="menu-down" size={24} color="white" /> : 
            <MaterialCommunityIcons name="menu-up" size={24} color="white" />}
        </TouchableOpacity>
        {isToggled? <Divider width={2} orientation='vertical' /> : <StoriesHighlight/>}
    </>
    )
}

const StoriesHighlight =()=> {
    return (
        <View style ={{ marginBottom: 13}}>
            <Text style={{ color: 'white', marginLeft: 14, marginBottom: 4}}>Keep your favorite stories on your profile</Text>
            <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            >
                <TouchableOpacity >
                    <Image source={{uri: Plus}} style={styles.story}/>
                    <Text style={{color: 'white', textAlign:'center'}}>Add New</Text>
                </TouchableOpacity>
                {Hightlights.map((hightlight,index)=> (
                    <TouchableOpacity key={`touch-${index}`} style={{ alignItems: 'center'}}>
                        <Image  source={{ uri: hightlight.image}}
                        key={`image-${index}`}
                        style={styles.story}/>
                        {/* <Text key={`username-${index}`}
                        style={{ color: 'white', fontSize: 0.1}}
                        >
                            {`${story.user.length > 10 ? `${story.user.slice(0,10)}...`: story.user}`}
                        </Text> */}
                    </TouchableOpacity>
                ))}
    
            </ScrollView>
        </View>
      )
}



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
    },
    story: {
        width: 63,
        height: 63,
        borderRadius: '50%',
        marginLeft: 6,
        borderWidth: 1.5,
        padding: 10,
        // borderColor: '#ff8530'
    }
})