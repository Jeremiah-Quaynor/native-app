import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { USERS } from '../../data/users';

const Stories = () => {
  return (
    <View style ={{ marginBottom: 13}}>
        <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        >
            {USERS.map((story,index)=> (
                <TouchableOpacity key={`touch-${index}`} style={{ alignItems: 'center'}}>
                    <Image  source={{ uri: story.image}}
                    key={`image-${index}`}
                    style={styles.story}/>
                    <Text key={`username-${index}`}
                    style={{ color: 'white', fontSize: 0.1}}
                    >
                        {`${story.user.length > 10 ? `${story.user.slice(0,10)}...`: story.user}`}
                    </Text>
                </TouchableOpacity>
            ))}

        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    story: {
        width: 75,
        height: 75,
        borderRadius: '50%',
        marginLeft: 6,
        borderWidth: 1.5,
        borderColor: '#ff8530'
    }
})



export default Stories