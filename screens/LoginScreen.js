import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import { windowHeight, windowWidth } from '../utils/Dimentions';

import FormButton from '../components/FormButton'
import FormInput from '../components/FormInput'
import SocialButton from '../components/SocialButton'

function LoginScreen({ navigation }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <View style={styles.container}>
            {/* <IconAntDesign name="user" size={25} color="#666" />
            <Text>Login Screen</Text> */}
            <Image
                source={require('../assets/png.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>Log In</Text>

            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle="Sign In"
                // onPress={() => alert('Sign In Clicked!')}
                onPress={() => navigation.navigate('Home')}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* <SocialButton
             buttonTitle="Sign In with Facebook"
             btnType="facebook"
             color="#4867aa"
             backgroundColor="#e6eaf4"
             onPress={() => {}}
            />

            <SocialButton
                buttonTitle="Sign In with Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => { }}
            /> */}


            <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.navButtonText}>Don't have an account? Create here</Text>
            </TouchableOpacity>

        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',


        width: 150,
        height: 150,
        borderRadius: 150 / 2,
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 22,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 15,
        // marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    }
});