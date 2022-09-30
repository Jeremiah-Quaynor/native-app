import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Alert, SafeAreaView, Button } from 'react-native';
// import { withExpoSnack } from 'nativewind';

export default function App() {
  let state = false;

  const pressed =() => {
    // state =!state
    Alert.alert("Today's Motivation", "Life hard, Give up",[
      {text: "Yes"},
      {text: "Yes, I will"}
    ])
  }
  return (
    <SafeAreaView style={styles.container}>
      
      {/* <Text 
        numberOfLines={1} 
        style={styles.text}
          >welcome to Expo welcome to Expo
        </Text> */}


      <Button 
        title='Click Me' 
        style= {styles.text}
        onPress={pressed}>Click Me</Button>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems:'center'
  },
  text: {
    color: 'yellow',
    fontSize:'20px',
    fontWeight: '600',
  }
});
