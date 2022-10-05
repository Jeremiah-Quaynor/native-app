import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import { POSTS } from '../data/posts'
import BottomTabs, { bottomTabsIcons } from '../components/home/BottomTabs'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView >
          <Stories />
          {POSTS.map((post, index)=> (
            <Post post={post} key={index}/>
          ))}

        </ScrollView>
        <BottomTabs icons={bottomTabsIcons}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'black',
        flex: 1
    }
})