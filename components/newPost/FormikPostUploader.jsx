import React, { useState } from 'react'
import { View,Image, TextInput, Button, Text } from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements'
import validUrl from 'valid-url'


const PLACEHOLDER_IMG = 'https://as1.ftcdn.net/v2/jpg/02/18/21/86/1000_F_218218632_jF6XAkcrlBjv1mAg9Ow0UBMLBaJrhygH.jpg'

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(2200, 'Caption has reached the character limit.')
})


const FormikPostUploader = ({ navigation }) => {

  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)

  return (
    <Formik
      styles={{ color: 'white'}}
      initialValues={{ caption:'', imageUrl:''}}
      onSubmit={(values)=>{
        console.log(values)
        console.log("Your post was submitted🎉🎉🎉")
        navigation.goBack()}}
      validationSchema={uploadPostSchema}
      validateOnMount= {true}
    >
      {({handleBlur, 
        handleChange, 
        handleSubmit,
        values,
        errors, 
        isValid
      })=> (
        <>
          <View style={{ margin:10, justifyContent:'space-between', flexDirection:'row'}}>


            <Image source={{uri: validUrl.isUri(thumbnailUrl)? thumbnailUrl: PLACEHOLDER_IMG}} style={{ width:100, height:100}}/>

            <View style={{ flex:1, marginLeft: 14}}>
              <TextInput 
              placeholderTextColor='gray' 
              placeholder='Write a caption...' 
              multiline={true} 
              style={{ color:'white', fontSize:20,height:40}}
              onChangeText={handleChange('caption')}
              onBlur={handleBlur('caption')}
              value={values.caption}/>
            </View>


          
          </View>
          <Divider width={0.2} orientation='vertical' />
          <TextInput 
          onChange={e => setThumbnailUrl(e.nativeEvent.text)}
          placeholderTextColor='gray' 
          placeholder='Enter Image URL'
          style={{ color:'white', fontSize:20,height:30,margin:10}}
          onChangeText={handleChange('imageUrl')}
          onBlur={handleBlur('imageBlur')}
          value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{ fontSize:12, color: 'red',marginLeft:12}}>
              {errors.imageUrl}
            </Text>
          )}


          <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
        </>
      )}

    </Formik>
  )
}

export default FormikPostUploader
