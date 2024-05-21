import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Login from '../Screens/Login';
import { ForgotPassword } from '../Screens/ForgotPassword';
import { SignUp } from '../Screens/SignUp/SignUp';
import { HomeScreen } from '../Home/HomeScreen';
import SideMenuNavigator from './SideMenu/SideMenuNavigator';

const StackNavigator = createNativeStackNavigator();

const Navigator = () => {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
      <StackNavigator.Navigator>

        <StackNavigator.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <StackNavigator.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />

        <StackNavigator.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />

        <StackNavigator.Screen
          name="Home_Screen"
          component={SideMenuNavigator}
          options={{ headerShown: false }}
        />

        </StackNavigator.Navigator>
        </GestureHandlerRootView>
    );
    
  }
  

  /**
   * 
        <StackNavigator.Screen
          name="DrawerNavigator"
          component={SideMenuNavigator}
        />
   */

  export default Navigator;