import React, { useState, useRef, useEffect  } from 'react';
import { View,KeyboardAvoidingView, Image, Text, ImageBackground, TouchableOpacity, Dimensions , TextInput, StyleSheet } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { buttons } from '../assets/Styles/buttons';

export function ForgotPassword() {
    const navigation = useNavigation();
// constants to keep track of
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

  const handleResetPassword = () => {
    if (email) {
      setMessage(`If there is an account associated with: ${email}, a password reset request has been sent.`);
    } else {
      setMessage('Please enter your email address');
    }
  };
    
    return (

<View style={styles.container}>

<ImageBackground
    source={require('../assets/temp_background.jpg')} 
    style={styles.background}
    resizeMode="cover">
      <View style={styles.overlay}>


      <Text style={styles.title}>Forgot Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="white"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={buttons.buttonStyle} onPress={handleResetPassword}>
        <Text style={buttons.text}>Reset Password</Text>
      </TouchableOpacity>
      <Text style={styles.message}>{message}</Text>

      <View style={styles.break}/>

      <TouchableOpacity onPress={() => {navigation.goBack()}}><Text style={styles.nonBoldSmalllabel}>Return to Login</Text></TouchableOpacity>
      


      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    title: {
      color:'white',
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: '90%',
      padding: 10,
      borderWidth: 1,
      borderRadius: 100,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 20
    },
    button: {
      backgroundColor: 'white',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
    },
    message: {
      marginTop: 10,
      fontSize: 16,
      color: 'white',
    },
    background: {
      flex: 1, // Makes the image cover the entire screen
      width: '100%',
      justifyContent: 'center',
        alignItems: 'center',
      resizeMode: 'cover', // Resizes the image to cover the container
    },
    overlay: {
      flex:1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)', // You can add a semi-transparent overlay if needed
      justifyContent: 'center',
      alignItems: 'center',
  
    },
  break:{
    margin: 10
    },
    nonBoldSmalllabel: {
      fontSize: 15,
      textAlign: 'center',
      marginLeft: '0%',
      color: 'white',
    },
  });