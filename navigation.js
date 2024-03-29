import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen';
import NewPost from './screens/NewPostScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ProfileScreen from './screens/ProfileScreen';
import Menu from './screens/Menu';
import ChatsScreen from './screens/ChatsScreen';




const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false,
}

export const SignedInStack = () => {
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName='ProfileScreen' screenOptions={screenOptions}>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='NewPost' component={NewPost} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='SignUp' component={SignUpScreen} />
            <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
            <Stack.Screen name='MenuScreen' component={Menu} />
            <Stack.Screen name='ChatsScreen' component={ChatsScreen} />

        </Stack.Navigator>
    </NavigationContainer>
    )
}

// export const SignedOutStack = () => {
//     return(
//         <NavigationContainer>
//         <Stack.Navigator initialRouteName='Login' screenOptions={screenOptions}>
//             <Stack.Screen name='Login' component={LoginScreen} />
//             <Stack.Screen name='SignUp' component={SignUpScreen} />
//         </Stack.Navigator>
//     </NavigationContainer>
//     )
// }

 