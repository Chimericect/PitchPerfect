import * as React from 'react';
import { View,Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, CommonActions, DrawerActions } from '@react-navigation/native';

import { useLoginState } from '../Universal_States/universalLoginState';

export default function SettingsScreen() {
   const { updateIsLoggedIn } = useLoginState();
   const navigation = useNavigation();

   const logOut = () => {
      // for when the user Logs out
      updateIsLoggedIn(false);
      
      // reset the navigation stack
      navigation.dispatch(
        CommonActions.reset(
          {
            index: 0, // Index of the home screen
            routes: [{ name: 'Login' }],
          }
        )
      )
    };


   return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<TouchableOpacity  onPress={logOut}> 
            <Text>Log Out</Text>
            </TouchableOpacity>
</View>
   );
 }