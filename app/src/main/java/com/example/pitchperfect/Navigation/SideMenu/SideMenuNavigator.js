import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import { HomeScreen } from '../../Home/HomeScreen';
import ProfileScreen from '../../Screens/Profile';
import SettingsScreen from '../../Screens/Settings';


//Aesthetics
import { AntDesign, Ionicons, MaterialCommunityIcons  } from '@expo/vector-icons';

const DrawerNavigator = createBottomTabNavigator();

const SideMenuNavigator = () => {
    return (
            <DrawerNavigator.Navigator 
            initialRouteName="Home_Route">
                <DrawerNavigator.Screen 
                name='Home' 
                component={HomeScreen}
                options={{
                  headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
                />
                <DrawerNavigator.Screen 
                name='Profile' 
                component={ProfileScreen}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                      <AntDesign name="user" size={size} color={color} /> // Profile icon
                    ),
                  }}/>
                <DrawerNavigator.Screen 
                name='Settings' 
                component={SettingsScreen}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                      <AntDesign name="setting" size={size} color={color} /> // Settings icon
                    ),
                  }}/>
            

            </DrawerNavigator.Navigator>
    );
}

export default SideMenuNavigator;