import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { withExpoSnack } from 'nativewind';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>welcome to Expo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    textColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
