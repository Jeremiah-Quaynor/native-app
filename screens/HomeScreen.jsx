import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import { POSTS } from '../data/posts'

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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'black',
        flex: 1
    }
})