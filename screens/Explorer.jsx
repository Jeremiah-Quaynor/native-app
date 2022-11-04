import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

const Explorer = () => {
  return (
    <View style={styles.container}>
      <Text>Explorer</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    color:  'white'
  }
})

export default Explorer