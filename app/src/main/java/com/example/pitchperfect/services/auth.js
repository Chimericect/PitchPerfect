import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"
import { auth } from "./config"
import { useLoginState } from "../Universal_States/universalLoginState";
import { useNavigation, CommonActions } from '@react-navigation/native';

const { updateIsLoggedIn } = useLoginState();
//Sign up
export async function signUp(email, password) {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      console.log('User registered successfully!');
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  }
  
  // Sign In
  export async function signIn(email, password) {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      navigation.dispatch(
        CommonActions.reset(
          {
            index: 0, // Index of the home screen
            routes: [{ name: 'HomeScreen' }],
          }
        )
      )
      console.log('User signed in successfully!');
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  }
  
  // Sign Out
  export async function signOut() {
    try {
      await auth().signOut();
      console.log('User signed out successfully!');
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  }