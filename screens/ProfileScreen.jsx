import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ProfileHeader from '../components/Profile/ProfileHeader'
import BottomTabs, { bottomTabsIcons } from '../components/home/BottomTabs'
import UserDetails from '../components/Profile/UserDetails'
import EditSection from '../components/Profile/EditSection'
import Photos from '../components/Profile/Photos'

const ProfileScreen = ({navigation}) => {
  return (
    <>
      <ScrollView style={{ backgroundColor: 'black', flex: 1}}>
          <ProfileHeader navigation={navigation}/>
          <UserDetails />
          <EditSection navigation={navigation} />
          <Photos />
      </ScrollView>
      <BottomTabs icons={bottomTabsIcons} navigation={ navigation}/>
    </>
  )
}

export default ProfileScreen