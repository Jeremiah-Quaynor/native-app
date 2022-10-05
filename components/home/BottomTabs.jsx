import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import { Divider } from 'react-native-elements'
import { StyleSheet } from 'react-native'

export const bottomTabsIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home--v1.png',
        inactive:'https://img.icons8.com/fluency-systems-regular/144/ffffff/home--v1.png'
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/search--v1.png',
        inactive:'https://img.icons8.com/fluency-systems-regular/144/ffffff/search--v1.png'
    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-reel--v1.png',
        inactive:'https://img.icons8.com/ios/50/ffffff/instagram-reel--v1.png'
    },
    {
        name: 'Shops',
        active: 'https://img.icons8.com/ios-filled/48/ffffff/shop--v1.png',
        inactive:'https://img.icons8.com/ios/50/ffffff/shop--v1.png'
    },
    {
        name: 'Profile',
        active: 'https://img.icons8.com/ios-filled/48/ffffff/profile.png',
        inactive:'https://img.icons8.com/ios/50/ffffff/profile.png'
    },
]

const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({icon})=> (
        <TouchableOpacity onPress={()=> setActiveTab(icon.name)}>
            <Image source={{ uri: activeTab === icon.name ? icon.active: icon.inactive}} 
            style={[styles.icon, icon.name === 'Profile'? styles.profilePic: null]} />
        </TouchableOpacity>
    )

  return (
    <View style={styles.wrapper}>
        <Divider width={0.4} orientation="vertical"/>
        <View style={styles.container}>
            {icons.map((icon, index)=> (
                <Icon key={index} icon={icon}/>
            ))}
        </View>
    </View>

  )
}


const styles = StyleSheet.create({
    icon:{
        width: 30,
        height: 30
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10
    },
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom:'4%',
        zIndex: 999,
        backgroundColor: "#000"
    },
    profilePic: {
        borderRadius: "50%",
        borderColor: "#fff",
        borderWidth:1
    }
    
})

export default BottomTabs