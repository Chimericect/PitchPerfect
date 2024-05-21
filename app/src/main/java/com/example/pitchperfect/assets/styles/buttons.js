import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Font from 'expo-font';

export const buttons = StyleSheet.create({
    buttonStyle: {
      width: '80%',
      backgroundColor: '#fff', // background color
      borderRadius: 100, // Rounded corners
      paddingVertical: 15, // Vertical padding
      paddingHorizontal: 20, // Horizontal padding
      margin: 10,
      alignItems: 'center', // Center text horizontally
      justifyContent: 'center', // Center text vertically
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 3
    },
    disabledButtonStyle: {
      width: '80%',
      backgroundColor: 'rgba(255, 255, 255, 0.3)', // background color
      borderRadius: 100, // Rounded corners
      paddingVertical: 15, // Vertical padding
      paddingHorizontal: 20, // Horizontal padding
      margin: 10,
      alignItems: 'center', // Center text horizontally
      justifyContent: 'center', // Center text vertically
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 3
    },

    buttonContainer: {
      flexDirection: 'column', // Arrange buttons horizontally
      justifyContent: 'space-between', // Distribute space between buttons
      width: '100%', // Adjust the width of the container
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      //backgroundColor: 'blue'
    }, 
    
    text: {
      //fontFamily: 'texgyreadventor-bold', // does not read right now
      color: '#000000', // text color
      fontSize: 20, // Text size
    }
    })


    //----------- Login stuff below until refactor --------------------------------- 
    const LoginButton = ({ onPress }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={buttons.text}>Log In</Text>
      </TouchableOpacity>
    );
    };
    
    //----------- SignUp stuff below until refactor --------------------------------- 
    const SignUpButton = ({ onPress }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={buttons.text}>Sign Up</Text>
      </TouchableOpacity>
    );
    };