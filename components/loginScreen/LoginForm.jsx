import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity, Alert } from 'react-native'
import { Formik } from 'formik'
import Validator from 'email-validator'
import * as Yup from 'yup'
// import firebase from '../../firebase'
import React, {useState} from 'react'
import EMAILS from '../../data/emails'

const LoginForm = ( {navigation}) => {
    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        password: Yup.string()
        .required()
        .min(8, 'Your password has to be at least 8 characters')
    })


    const onLogin = ({email, password}) => {
        const result = EMAILS.find(({ user, passwrd }) => user === email && passwrd === password);
        if(result != undefined){
            console.log("Login Succesfull")
            navigation.push('HomeScreen')
        }else{
            Alert.alert('Invalid Details', "password or Username error. What would you like to do next??",
            [{
                text: 'Do nothing',
                onPress: ()=> console.log('Ok'),
                style: 'cancel'
            },
            {
                text: 'Sign Up',
                onPress: ()=> navigation.push('SignUp'),
                style: 'default'
            }
        ])
        }
    }




    return (
    <View style={styles.wrapper}>

        <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={(values) => onLogin(values)
        }
        validationSchema={LoginFormSchema}
        validateOnMount={true}
        >
            {({handleChange, handleBlur, handleSubmit, values, isValid})=>(
                <>
                    <View style= {[styles.inputField, 
                        { borderColor: values.email.length< 1 || Validator.validate(values.email)? '#ccc' : 'red' }
                        ]}>
                        <TextInput 
                        placeholderTextColor="#444"
                        placeholder="Phone number, username or email"
                        autoCaptalize='none'
                        keyboardType='email-address'
                        textContentType='emailAddress'
                        autoFocus={true}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        />
                    </View>

                    <View style= {[styles.inputField,
                    { borderColor: 2 > values.password.length || values.password.length > 8 ? '#ccc': 'red'}]}>
                        <TextInput 
                        placeholderTextColor="#444"
                        placeholder="Password"
                        autoCaptalize='none'
                        autoCorrect={false}
                        secureTextEntry={true}
                        textContentType='password'
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        />
                    </View>
                    <View style={{ alignItems: 'flex-end', marginBottom: 30}}>
                        <Text style={{ color: '#6BB0F5'}}>Forgot Password? </Text>
                    </View>
                    <Pressable 
                    titleSize={20} 
                    style={styles.button(isValid)} 
                    onPress={handleSubmit}> 
                        <Text style={styles.buttonText}> Log In</Text>
                    </Pressable>

                    <View style={styles.signUpContainer}>
                        <Text>Don't have an account?</Text>
                        <TouchableOpacity onPress={()=> navigation.push('SignUp')}>
                            <Text style={{ color: '#6BB0F5'}}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}

        </Formik>
    </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80,

    },
    inputField: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1
    },
    button: isValid=> ({
        backgroundColor: isValid ? '#0096F6': '#9ACAF7',
        alignItems: 'center',
        justifyContent:'center',
        minHeight: 42,
        borderRadius: 4,
    }),
    buttonText: {
        fontWeight: '600',
        color: 'white',
        fontSize: 20,
    },
    signUpContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50,

    },
    // signUpText: {

    // }
})
export default LoginForm