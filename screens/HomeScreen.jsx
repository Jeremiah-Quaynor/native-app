import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import { POSTS } from '../data/posts'
import BottomTabs, { bottomTabsIcons } from '../components/home/BottomTabs'

const HomeScreen = ({ navigation }) =>{
  return (
    <SafeAreaView style={styles.container}>
        <Header  navigation={ navigation}/>
        <ScrollView >
          <Stories />
          {POSTS.map((post, index)=> (
            <Post post={post} key={index}/>
          ))}

        </ScrollView>
        <BottomTabs icons={bottomTabsIcons} navigation={ navigation}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'black',
        flex: 1
    }
})


export default HomeScreen;