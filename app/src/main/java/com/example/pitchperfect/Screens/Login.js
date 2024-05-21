import React, { useState, useRef, useEffect } from 'react';
import { View,KeyboardAvoidingView, Image, Text, ImageBackground, TouchableOpacity, Dimensions , TextInput, StyleSheet } from 'react-native';
import { constants } from '../Constants/constants';
import { buttons } from '../assets/Styles/buttons';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { useLoginState, updateIsLoggedIn } from '../Universal_States/universalLoginState';
import { getAuth } from '@firebase/auth';

export function Login () {
  // Variables and Such
    const navigation = useNavigation();
    const { updateIsLoggedIn } = useLoginState();

    const [emailInput, setEmailText] = useState(''); // State to hold user input
    const [passwordInput, setPasswordText] = useState(''); // State to hold user input

    const emailInputRef = useRef(null); // ref for the email input
    const passwordInputRef = useRef(null); // ref for the password input

  // Handlers for different states
    const handleSignUpPress = () => {
      navigation.navigate('SignUp'); // Navigate to the SignUp screen
    };

    const handleForgotPassPress = () => {
      console.log("FORGOT PRESSED");
      navigation.navigate('ForgotPassword');
    }

    const handleEmailState = (text) => {
      setEmailText(text)
    }
    const handlePasswordState = (text) => {
      setPasswordText(text)
    }

  const logIn = () => {
    // Handle the login logic here.
    // will need to check if credentials are correct but for now, just setting it to true for testing
    
    console.log('Email: ', emailInput);
    console.log('Password: ', passwordInput);

    updateIsLoggedIn(true);
    navigation.dispatch(
      CommonActions.reset(
        {
          index: 0, // Index of the home screen
          routes: [{ name: 'Home_Screen' }],
        }
      )
    )
  };


return (
  <View style={styles.container}>
{ /* Background image - change when I can get my own */}
     <ImageBackground
    source={require('../assets/temp_background.jpg')} 
    style={styles.background}
    resizeMode="cover"
  >
  { /**/}

  <View style={styles.overlay}>
    <View>
    { /*Thing will go here to break up the dead space */}

    </View>

  {/*EMAIL INPUT*/}
  
  
{/** Set one */}
  <KeyboardAvoidingView
              style={styles.keyboardAvoid}
              behavior="padding" 
              keyboardVerticalOffset={20} >

    <View style={styles.view1}>
          <TextInput
            style={styles.input}
            placeholder= { constants.enterEmail }
            onChangeText={handleEmailState}
            value={emailInput}
            underlineColorAndroid="transparent"
            placeholderTextColor="white"
            color="white"
            ref={emailInputRef} 
            onSubmitEditing={() => passwordInputRef.current.focus()}
        />

          <TextInput
            style={styles.input}
            placeholder= { constants.enterPassword }
            secureTextEntry={true}
            onChangeText={handlePasswordState}
            value={passwordInput}
            underlineColorAndroid="transparent"
            placeholderTextColor="white"
            color="white"
            ref={passwordInputRef}
          />
    </View>
  </KeyboardAvoidingView>

  <View style={styles.secondHalf}>
        {/* View at the top of the second half */}
    <View style={buttons.buttonContainer}>
          {/* Content for View 2 */}
          <TouchableOpacity style={buttons.buttonStyle} onPress={logIn}>
            <Text style={buttons.text}>{constants.login}</Text>
          </TouchableOpacity>

      <View style={styles.verticalText}>
          <Text
          style={styles.whiteText}>{constants.dontHaveAcc}</Text>
          
          <TouchableOpacity
          onPress={handleSignUpPress}
          ><Text style={styles.whiteText}>{constants.signUpNow}</Text></TouchableOpacity>
      </View>

      <View style={styles.forgotPassword}>
        <TouchableOpacity onPress={handleForgotPassPress}>
        <Text style={styles.whiteText}>{constants.forgotPass}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>

{/** Set two */}
  <View style={buttons.buttonContainer}>
    

{/** Set two end*/}
  </View>  
</View> 
</ImageBackground>
      
    </View> 
    ) }

//-------------------------------------------------------------------------
const styles = StyleSheet.create({
container: {
  flexDirection: 'column',
  flex: 1,
  resizeMode: 'cover',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  
},
whiteText: {
  color: 'white', // Set the color property to 'white'
  fontSize: 15,
},
background: {
  flex: 1, // Makes the image cover the entire screen
  resizeMode: 'cover', // Resizes the image to cover the container
},
overlay: {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.7)', // You can add a semi-transparent overlay if needed
  justifyContent: 'center',
  alignItems: 'center',
  
},
input: {
  width: '70%',
  padding: 10,
  borderWidth: 1,
  borderRadius: 100,
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  borderColor: 'rgba(255, 255, 255, 0.5)',
  margin: 10,
  alignItems: 'center',
  textAlign: 'center',
  fontSize: 20
},

verticalText: {
  flexDirection: 'row',
  width: '100%',
  color: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: 10
  
},
forgotPassword:
{
  width: '100%',
  alignItems: 'center',
  paddingTop: 10,
},

keyboardAvoid:
{ 
  flex:5,
  width: '100%',
},
view1: {
  flex: 1, // View 1 takes up the first half
  alignItems: 'center',
  justifyContent: 'flex-end'
  //backgroundColor: 'red'
},
secondHalf: {
  flex: 1, // Takes up the second half of the screen
  width: '100%',
  alignItems: 'center',
  justifyContent: 'flex-start'
},


});
  
  export default Login;