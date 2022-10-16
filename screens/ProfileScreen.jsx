import { View, Text } from 'react-native'
import React from 'react'
import ProfileHeader from '../components/Profile/ProfileHeader'
import BottomTabs, { bottomTabsIcons } from '../components/home/BottomTabs'
import UserDetails from '../components/Profile/UserDetails'
import EditSection from '../components/Profile/EditSection'

const ProfileScreen = ({navigation}) => {
  return (
    <View style={{ backgroundColor: 'black', flex: 1}}>
        <ProfileHeader navigation={navigation}/>
        <UserDetails />
        <EditSection navigation={navigation} />
        <BottomTabs icons={bottomTabsIcons} navigation={ navigation}/>
    </View>
  )
}

export default ProfileScreen