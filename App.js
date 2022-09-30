import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';


export default function App() {

  return(
    <View style={styles.container}>
      <View style={styles.img}> 
        <ImageBackground  
          resizeMode="cover"
          source={require('./app/assets/background.jpg')}
          style= {{
            height: '100%'
          }}
          >

          <Image source={require('./app/assets/logo-black.png')}
          style={{
            width: 100,
            height: 100,
            // flexDirection: 'row',
            alignSelf: 'center',
            top: 100
          }}/>
          <Text style={{
            alignSelf: 'center',
            top: 110
          }}> Sell What You Don't Need</Text>
        </ImageBackground>
        </View>

      <View style={styles.logIn} />

      <View style={styles.signUp} />



    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue'
  },
  img: {
    width: '100%',
    height:'80%',
    backgroundColor: 'white',
  },
  logIn: {
    width: '100%',
    height:'10%',
    backgroundColor: 'tomato'
  },
  signUp: {
    width: '100%',
    height:'10%',
    backgroundColor: 'dodgerblue'
  }
})


