import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen';
import NewPost from './screens/NewPostScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';




const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false,
}

const SignedInStack = () => {
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={screenOptions}>

            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='NewPost' component={NewPost} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='SignUp' component={SignUpScreen} />


        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default SignedInStack