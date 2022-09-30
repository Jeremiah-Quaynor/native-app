import { StyleSheet, View } from 'react-native';


export default function Trial() {

  return(
    <View style= {{
      backgroundColor: '#fff',
      flex: 1,
      flexDirection: 'row',// horizontal
      justifyContent: 'center',//main
      alignItems: 'center',// secondary
      alignContent: 'center',
      flexWrap: 'wrap'

    }}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 100
      }}/>
      <View style={{
        backgroundColor: 'grey',
        width: 100,
        height: 100,
        position: 'relative',
        top:20
      }}/>
      <View style={{
        backgroundColor: 'pink',
        width: 100,
        height: 100
      }}/>

    </View>
  )
}

// const styles = StyleSheet.create({
// })


