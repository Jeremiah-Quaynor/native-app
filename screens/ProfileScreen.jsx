import { View, Text } from 'react-native'
import React from 'react'
import ProfileHeader from '../components/Profile/ProfileHeader'
import BottomTabs, { bottomTabsIcons } from '../components/home/BottomTabs'
import { Divider } from 'react-native-elements'

const ProfileScreen = ({navigation}) => {
  return (
    <View style={{ backgroundColor: 'black', flex: 1}}>
        <ProfileHeader />
        <Divider width={2} orientation={'vertical'}/>


        <BottomTabs icons={bottomTabsIcons} navigation={ navigation}/>

    </View>
  )
}

export default ProfileScreen