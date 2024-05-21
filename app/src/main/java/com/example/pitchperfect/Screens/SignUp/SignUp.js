import React, { useState, useRef, useEffect  } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';
import { buttons } from '../../assets/Styles/buttons';
import { constants } from '../../Constants/constants';
import Dropdown from './Dropdown';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from '@firebase/auth';

export const SignUp = () => {
// Variables and such
  const navigation = useNavigation();

  const [emailInput, setNewEmail] = useState(''); // State to hold the email the user will sign up with
  const [passwordInput, setNewPassword] = useState(''); // State to hold password for the user
  const [confirmPasswordInput, setPasswordConfirmation] = useState(''); // State to hold password for the user to check
  const [showPassword, setShowPassword] = useState(true); // for the visibility of the password. this impacts BOTH password fields.
  
  const emailInputRef = useRef(null); // ref for the email input
  const passwordInputRef = useRef(null); // ref for the password input
  const passwordConfirmInputRef = useRef(null); // ref for the password input  

  const [isValidEmail, setIsValidEmail] = useState(true); // if the user input a correct email
  const [isValidPasswordFormat, setIsValidPasswordFormat] = useState(true); // if the password meets requirements
  const [passwordsMatch, setIsValidPasswordsMatch] = useState(true); // if the passwords matched when re-entered
  const [hasEightChars, setHasEightChars] = useState(true); // check if the password is 8 characters long
  const [hasOneUppercase, setHasOneUpperCase] = useState(true); // check if the password has one uppercase Letter
  const [hasOneNum, sethasOneNum] = useState(true); // check if the password has at least one number
  const [hasOneSpecial, sethasOneSpecial] = useState(true); // check if the password has at least one special character

  const [signUpReady, setSignUpReady] = useState(false);

//Dropdown Handling
  const dropdownItems = [
    { label: 'Parent', value: 'parent' },
    { label: 'Coach', value: 'coach' }, 
    { label: 'Director', value: 'director' },
  ]
  const [selectedItem, setSelectedItem] = useState(null);
  const [userSelectedAnItem, setUserSelectedAnItem] = useState(false); // if they selected an item from the drop down

// State handlers
  const handleNewEmailState = (text) => {
    setNewEmail(text);
    setIsValidEmail(validEmailCheck(text));
  }

  const handleNewPasswordState = (text) => {
    setNewPassword(text);

    setHasEightChars(text.length >= 8);
    setHasOneUpperCase(/[A-Z]/.test(text));
    sethasOneNum(/\d/.test(text));
    sethasOneSpecial(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~ ]/.test(text));

    setIsValidPasswordFormat(isValidPassword(text));
  }

  const handleNewPasswordConfirmState = (text) => {
    setPasswordConfirmation(text)

    validatePasswordConfirmation(text);
  }

  const handleSelect = (item) => {
    setUserSelectedAnItem(true);
    setSelectedItem(item);
  };

  //Use Effect for tracking variables; want these tracked to know when the sign up button can be enabled
    useEffect(() => {
      // track selectedItem
        //setUserSelectedAnItem(true);
      console.log("Item selected: ", selectedItem);
      console.log("Was Item selected (set to true above): ", userSelectedAnItem);
    }, [selectedItem]);

    useEffect(() => {
      // track isValidEmail
      console.log('isValidEmail changed:', isValidEmail);
      canSignUp();
    }, [isValidEmail]);
    
    useEffect(() => {
      // track isValidPasswordFormat
      console.log('isValidPasswordFormat changed:', isValidPasswordFormat);
      canSignUp();
    }, [isValidPasswordFormat]);
    
    useEffect(() => {
      // This effect will run whenever passwordsMatch changes
      console.log('passwordsMatch changed:', passwordsMatch);
      canSignUp();
    }, [passwordsMatch]);
    
    useEffect(() => {
      // This effect will run whenever userSelectedAnItem changes
      console.log('userSelectedAnItem changed:', userSelectedAnItem);
      canSignUp();
    }, [userSelectedAnItem]);

    //--------------------------------------------------------------

  const canSignUp = () =>
  {
    if (isValidEmail && isValidPasswordFormat && passwordsMatch && userSelectedAnItem)
    {
      setSignUpReady(true);
    }
    else
    {
      setSignUpReady(false);
    }
  }

  //Validation Checking
    /**
     * validEmailCheck
     * This function checks if the user is inputting a valid email pattern in.
     * Does not check if the email is a legitimate email.
     * 
     * @param {*} input 
     * @returns true if the input is a valid email pattern
     */
    const validEmailCheck = (input) =>
    {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,4}$/i;

      return emailRegex.test(input);
    }

    /**
     * isValidPassword
     * @param {*} input 
     */
    const isValidPassword = (input) => {
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&-_]).{8,}$/;
    
      return passwordRegex.test(input);
    };
    

    const validatePasswordConfirmation = (input) => {
      setIsValidPasswordsMatch(input === passwordInput);
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

  //Sign up logic
  const signUpFun = () => {
    if(canSignUp())
    {
      //something
      console.log('Email: ', emailInput);
      console.log('Password: ', passwordInput);
      console.log('Password Confirm: ', confirmPasswordInput);
      console.log('I am a:', selectedItem.value ?? 'Not chosen');
    }

  };


// set up UI

return(
  <View style={styles.container}>
    
    <ImageBackground
    source={require('../../assets/temp_background.jpg')} 
    style={styles.background}
    resizeMode="cover"
  >
  <View style={styles.overlay}>
    <View style={styles.informationBox}>

    <View>
  <Text style={styles.label}>{constants.email}</Text>
  

  {!isValidEmail && (
        <Text style={styles.errorLabel}>{constants.inputValEmail}</Text>
      )}

  <TextInput
            style={[styles.input, 
              !isValidEmail && styles.inputERROR]}
            placeholder= { constants.enterEmail }
            onChangeText={handleNewEmailState}
            value={emailInput}
            underlineColorAndroid="transparent"
            placeholderTextColor="white"
            color="white"
            ref={emailInputRef} 
            onSubmitEditing={() => passwordInputRef.current.focus()}
    />

  </View>

  <View style= {styles.break}/>

  <View>
  <Text style={styles.label}>{constants.enterPassword}</Text>

  {!hasEightChars && (
        <Text style={styles.errorLabel}>{constants.eightCharReq}</Text>
      )}
  {!hasOneNum && (
        <Text style={styles.errorLabel}>{constants.oneNumReq}</Text>
      )}
  {!hasOneUppercase && (
        <Text style={styles.errorLabel}>{constants.oneUppReq}</Text>
      )}
  {!hasOneSpecial && (
        <Text style={styles.errorLabel}>{constants.oneSpecReq}</Text>
      )}

<View style={styles.inputContainer}>
<TextInput
            secureTextEntry={showPassword}
            style={[styles.input, 
              !isValidPasswordFormat && styles.inputERROR,
              isValidPasswordFormat && styles.inputValid,
            !passwordsMatch && styles.inputERROR]}
            width= "80%"
            placeholder= { constants.enterNewPassword }
            onChangeText={handleNewPasswordState}
            value={passwordInput}
            underlineColorAndroid="transparent"
            placeholderTextColor="white"
            color="white"
            ref={passwordInputRef} 
            onSubmitEditing={() => passwordConfirmInputRef.current.focus()}
    />
    <TouchableOpacity onPress={togglePasswordVisibility}>
        <FontAwesome
          name={showPassword ? 'eye-slash' : 'eye'}
          size={24}
          color="gray"
          margin="10%"
        />
      </TouchableOpacity>
</View>

  </View>

  <Text style={styles.nonBoldSmalllabel}>{constants.passRequirements}</Text>

  <View style= {styles.break}/>

  <View>
  <Text style={styles.label}> {constants.confirmPassword}</Text>

  {!passwordsMatch && (
        <Text style={styles.errorLabel}>{"Passwords not matching"}</Text>
      )}

  <View style={styles.inputContainer}>
  <TextInput
            secureTextEntry={showPassword}
            style={[styles.input,
            !passwordsMatch && styles.inputERROR ]
            }
            placeholder= { constants.confirmPassword }
            onChangeText={handleNewPasswordConfirmState}
            value={confirmPasswordInput}
            width= "80%"
            underlineColorAndroid="transparent"
            placeholderTextColor="white"
            color="white"
            ref={passwordConfirmInputRef} 
            //donSubmitEditing={() => passwordInputRef.current.focus()}
    />
    <TouchableOpacity onPress={togglePasswordVisibility}>
        <FontAwesome
          name={showPassword ? 'eye-slash' : 'eye'}
          size={24}
          color="gray"
          margin="10%"
        />
      </TouchableOpacity>

  </View>
  </View>

  <View style= {styles.break}/>

<View>

<Text style={styles.label}> {constants.iAmA}</Text>
<Dropdown 
style= {[styles.dropDown,
!userSelectedAnItem && styles.inputERROR
]}
items={dropdownItems} 
selectedItem={selectedItem} 
onSelect={(item) => handleSelect(item)} />

</View>

  <View style= {styles.break}/>

<View>
{
  signUpReady ? (
    <TouchableOpacity style={buttons.buttonStyle} onPress={signUpFun}>
            <Text style={buttons.text}>{constants.signUp}</Text>
          </TouchableOpacity>
  ) : (
    <TouchableOpacity style={buttons.disabledButtonStyle} disabled>
            <Text style={buttons.text}>{constants.signUp}</Text>
          </TouchableOpacity>
  )

}
</View>

<View style= {styles.break}/>

</View>
<View style={styles.divider}/>

<View style={{ marginTop: 10 }}>
  <TouchableOpacity onPress={() => {navigation.goBack()} }>
    <Text style={styles.nonBoldSmalllabel}>Back to Log in</Text>
  </TouchableOpacity>
</View>
  </View>
  </ImageBackground>
  </View>
  
)}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    
  },
  background: {
    flex: 1, // Makes the image cover the entire screen
    resizeMode: 'cover', // Resizes the image to cover the container
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // You can add a semi-transparent overlay if needed
    //backgroundColor: 'grey',
    justifyContent: 'flex-start',
    flexDirection: 'column'
    
  },
  informationBox:
  {
    width: '100%',
    justifyContent: 'flex-start',
    marginTop: '35%',
    alignContent: 'center',
    paddingLeft: '5%'

  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
    marginLeft: 20,
    color: 'white'
  },
  nonBoldSmalllabel: {
    fontSize: 15,
    textAlign: 'center',
    marginLeft: '0%',
    color: 'white',
  },
  errorLabel: {
    fontSize: 15,
    marginBottom: 5,
    textAlign: 'left',
    marginLeft: 20,
    color: 'red'
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
  inputERROR: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    borderColor: 'rgba(255, 0, 0, 0.5)',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20
  },
  keyboardAvoid:
{ 
  flex:5,
  width: '100%',
},
break:
{
  margin: 10
},
smallBreak:
{
  margin: 5
},
divider: {
  height: 1, // Set the height of the divider
  width: '90%',
  backgroundColor: 'white', // Set the color of the divider
  justifyContent: 'center',
  alignSelf: 'center'
},
inputContainer: {
  flexDirection: 'row',
  alignItems: 'center',
},
})
