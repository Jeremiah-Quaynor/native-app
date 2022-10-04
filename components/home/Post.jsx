import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
// import { Divider } from 'react-native-elements'



const postFootIcons = [
    {
        name: 'Like',
        imageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
        likedImageUrl: 'https://img.icons8.com/ios-glyphs/90/fa314a/like--v1.png'
    },
    {
        name: 'Comment',
        imageUrl: 'https://img.icons8.com/material-outlined/60/ffffff/speech--v1.png'
    },
    {
        name: 'Share',
        imageUrl:'https://img.icons8.com/material-outlined/60/ffffff/forward.png'
    },
    {
        name: 'Save',
        imageUrl:'https://img.icons8.com/material-outlined/60/ffffff/save.png'
    },
]


const Post = ({ post }) => {
  return (
    <View style= {{ marginBottom: 30 , borderTopColor: '#63625d', borderTopWidth: 0.3}}>
        <PostHeader post={post} />
        <PostImage image={post.imgUrl}/>
        <View style={{ marginTop:10, marginHorizontal:15}}>
            <PostFooter/>
            <Likes post={post} />
            <Caption post={post} />
        </View>
    </View>
  )
}


const PostHeader = ({ post }) => {
    return(
        <View style={{ 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            margin: 5,
            alignItems: 'center'
            }}>
            {/* <View style= {{ flexDirection:'row' , alignItems: 'center'}}> */}
                <TouchableOpacity style= {{ flexDirection:'row' , alignItems: 'center'}}>
                    <Image source={{ uri: post.profile_picture}} style={styles.story}/>
                    <Text style={{ color:'white', marginLeft: 5, fontWeight: '700'}}>{post.users}</Text>
                </TouchableOpacity>
            {/* </View> */}
            <TouchableOpacity>
                <Text style={{ color:'white', fontWeight: '900', margin: 10}}>...</Text>
            </TouchableOpacity>

        </View>
    )
}

const PostImage = ({ image }) => (
    <View  style={{ width: "100%", height: 450}}>
        <Image 
        source={{ uri: image}} 
        key= {image}
        style = {{ height: '100%', resizeMode: 'cover'}}
        />
    </View>
)

const PostFooter = ({ post })=> (
    <View style={{ flexDirection: 'row'}}>
        <View style={styles.leftFooterIconContainer}>
            <Icon imgStyle={styles.footerIcon}  imgUrl={ postFootIcons[0].imageUrl}/>
            <Icon imgStyle={styles.footerIcon}  imgUrl={ postFootIcons[1].imageUrl}/>
            <Icon imgStyle={[styles.footerIcon, styles.shareIcon]}  imgUrl={ postFootIcons[2].imageUrl}/>
        </View>
        <View style={{flex:1, alignItems: 'flex-end'}}>
            <Icon imgStyle={styles.footerIcon}  imgUrl={ postFootIcons[3].imageUrl}/>
        </View>
    </View>
)

const Icon = ({ imgStyle, imgUrl }) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{uri: imgUrl}} />
    </TouchableOpacity>
)

const Likes = ({ post })=> (
    <View style={{ flexDirection: 'row', marginTop: 4}}>
        <Text style={{ color: 'white', fontWeight: '600'}}>{post.likes.toLocaleString('en')} likes</Text>
    </View>
)

const Caption = ({ post }) => (
    <View style={{ marginTop:5}} >
        <Text style={{ color: 'white'}}>
            <Text style={{ fontWeight:'700'}} >{post.users }</Text>
            <Text> {post.caption }</Text>
        </Text>
    </View>
)


const styles = StyleSheet.create({
    story: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        marginLeft: 6,
        borderWidth: 1.5,
        borderColor: '#ff8530'
    },
    footerIcon: {
        width: 33,
        height: 33
    },
    leftFooterIconContainer: {
        flexDirection: 'row',
        width:'32%',
        justifyContent: 'space-between'
    },
    shareIcon: {
        transform: [{ rotate: '320deg'}],
        marginTop: -3,
        
    }
})

export default Post