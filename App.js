import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Alert, SafeAreaView, Button } from 'react-native';
// import Indicator from './components/activity';
import Cover from './pages/Cover';
import Home from './pages/home';
// import { withExpoSnack } from 'nativewind';

export default function App() {


  return (
    <View>
      {/* <Cover /> */}
      <Home />
    </View>

  );
}

