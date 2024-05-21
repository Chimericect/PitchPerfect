import React, { useRef, useState } from 'react';
import { View,Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, CommonActions, DrawerActions } from '@react-navigation/native';
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Login from '../Screens/Login';
import DataList from './DataScrollList';
import { useDataPoints } from './handlePitchData';
import { useLoginState } from '../Universal_States/universalLoginState';
import { TargetSquares } from './TargetSquares';

export const HomeScreen = ( ) =>
{
  const { updateIsLoggedIn } = useLoginState();
  const { dataPoints } = useDataPoints();

//Arrays ; will eventually be grabbed from the pitcher instead of a set list.

// for the swipeable bottom sheet
  const bottomSheetRef = useRef(null);
//For Placing the dot 
  const [clickedCoordinates, setClickedCoordinates] = useState(null);
  
  const handlePress = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    const coordinates = { x: locationX, y: locationY };
    setClickedCoordinates(coordinates);

    console.log('Clicked at:', coordinates, "Box Number: ", 0);
  };

    return (
        <View style={styles.container}>
        {updateIsLoggedIn ? (
          // Render the main content when the user is logged in
          <View style ={styles.container}>
            
            <View style={styles.mainSection}>

              <TargetSquares onPress={ handlePress } />
              
              
            </View>
            
            <BottomSheet
            ref={bottomSheetRef}
            index={0}
            snapPoints={['20%', '45%']}
            backgroundComponent={({ style }) => (
              <View style={[style, styles.dataContainer]} />
            )}
            >
            {/* Display the scrollable data list */}
            <DataList data={dataPoints} />
            </BottomSheet>

            </View>
        ) : (
              <Login/> 
        )}
      </View>
    )
    
}

// Bottom Sheet


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    },
    bottomSheet: {
      backgroundColor: 'white',
      padding: 16,
      alignItems: 'center',
    },
    mainSection: {
      justifyContent: 'center',
      top: 0, // Position it at the bottom
      left: 0, // Position it at the left edge
      right: 0, // Position it at the right edge
      padding: 10,
      height: '70%',
      
    },

  dataContainer:
  {
    position: 'absolute',
    backgroundColor: 'white',
    borderTopLeftRadius: '30%',
    borderTopRightRadius: '30%',
    padding: 10,
    bottom: 0, // Position it at the bottom
    left: 0, // Position it at the left edge
    right: 0, // Position it at the right edge
    
  },
  
});;
