import React, { useRef, useState } from 'react';
import { View,Text, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native';
import { useNavigation, CommonActions, DrawerActions } from '@react-navigation/native';
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export function TargetSquares ({ onPress })
{
  const [clickedCoordinates, setClickedCoordinates] = useState(null);

  const handlePress = (event, boxNumber,) => {
    const { locationX, locationY } = event.nativeEvent;
    const coordinates = { x: locationX, y: locationY };
    setClickedCoordinates(coordinates);

    console.log('Clicked at:', coordinates, "Box Number: ", boxNumber);
  };

  // The variations of the target squares go here. Only 3 possible choices: 4,6,9
  const FourBoxes = () =>
  {
      return (
          <View style={styles.fourBoxContainer}>
          {/* Top Row */}
          <View style={styles.fourBoxRow}>
              <TouchableOpacity style={styles.fourBoxBoxes} onPress={(event) => handlePress(event, 4)} >
              <Text style={styles.fourBoxNumber}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.fourBoxBoxes} onPress={(event) => handlePress(event, 3)} >
              <Text style={styles.fourBoxNumber}>3</Text>
              </TouchableOpacity>
          </View>
          {/* Bottom Row */}
          <View style={styles.fourBoxRow}>
              <TouchableOpacity style={styles.fourBoxBoxes} onPress={(event) => handlePress(event, 2)}  >
              <Text style={styles.fourBoxNumber}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.fourBoxBoxes} onPress={(event) => handlePress(event, 1)}  >
              <Text style={styles.fourBoxNumber}>1</Text>
              </TouchableOpacity>
          </View>
          </View>
      );
      };


const SixBoxes = () =>
  {
      return (
          <View style={styles.sixBoxContainer}>
          {/* First Row */}
          <View style={styles.sixBoxRow}>
              <TouchableOpacity style={styles.sixBoxBoxes} onPress={(event) => handlePress(event, 6)}>
              <Text style={styles.sixBoxNumber}>6</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sixBoxBoxes} onPress={(event) => handlePress(event, 5)}>
              <Text style={styles.sixBoxNumber}>5</Text>
              </TouchableOpacity>
          </View>
          {/* Second Row */}
          <View style={styles.sixBoxRow}>
              <TouchableOpacity style={styles.sixBoxBoxes} onPress={(event) => handlePress(event, 4)}>
              <Text style={styles.sixBoxNumber}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sixBoxBoxes} onPress={(event) => handlePress(event, 3)}>
              <Text style={styles.sixBoxNumber}>3</Text>
              </TouchableOpacity>
          </View>
          {/* Third Row */}
          <View style={styles.sixBoxRow}>
              <TouchableOpacity style={styles.sixBoxBoxes} onPress={(event) => handlePress(event, 2)}>
              <Text style={styles.sixBoxNumber}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sixBoxBoxes} onPress={(event) => handlePress(event, 1)}>
              <Text style={styles.sixBoxNumber}>1</Text>
              </TouchableOpacity>
          </View>
          </View>
      );   
  
  }

const NineBoxes = () => {
  return (
      <View style={styles.nineBoxContainer}>
  {/* First Row */}
  <View style={styles.nineBoxRow}>
      <TouchableOpacity style={styles.nineBoxBoxes} onPress={(event) => handlePress(event, 9)}>
      <Text style={styles.nineBoxNumber}>9</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nineBoxBoxes} onPress={(event) => handlePress(event, 8)}>
      <Text style={styles.nineBoxNumber}>8</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nineBoxBoxes} onPress={(event) => handlePress(event, 7)}>
      <Text style={styles.nineBoxNumber}>7</Text>
      </TouchableOpacity>
  </View>
  {/* Second Row */}
  <View style={styles.nineBoxRow}>
      <TouchableOpacity style={styles.nineBoxBoxes} onPress={(event) => handlePress(event, 6)}>
      <Text style={styles.nineBoxNumber}>6</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.nineBoxBoxes]} onPress={(event) => handlePress(event, 5)}>
      <Text style={styles.nineBoxNumber}>5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nineBoxBoxes} onPress={(event) => handlePress(event, 4)}>
      <Text style={styles.nineBoxNumber}>4</Text>
      </TouchableOpacity>
  </View>
  {/* Third Row */}
  <View style={styles.nineBoxRow}>
      <TouchableOpacity style={styles.nineBoxBoxes} onPress={(event) => handlePress(event, 3)}>
      <Text style={styles.nineBoxNumber}>3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nineBoxBoxes} onPress={(event) => handlePress(event, 2)}>
      <Text style={styles.nineBoxNumber}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nineBoxBoxes} onPress={(event) => handlePress(event, 1)}>
      <Text style={styles.nineBoxNumber}>1</Text>
      </TouchableOpacity>
  </View>
  </View>
);
  }

    return (
        <TouchableHighlight
          style={styles.container}
          underlayColor="rgba(255, 255, 255, 0.5)" // Semi-transparent background color when pressed
          onPress={onPress}
        >
          <View style={styles.box}>


        <FourBoxes />

          </View>
        </TouchableHighlight>
      );
    };
    



    const styles = StyleSheet.create({
      container: {
        marginTop: '35%',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      box: {
        width: '95%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.4)', 
      },

      //FourBox
      fourBoxContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      fourBoxRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 35,
        marginRight: 35,
        height: '40%'
      },
      fourBoxBoxes: {
        width: '50%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        margin: 25,
        justifyContent: 'center'
    },
    fourBoxNumber: {
        fontSize: 100, 
        textAlign: 'center',
        textAlignVertical: 'center', 
        justifyContent: 'center',
        color: 'black'
    },

    // Six box
    sixBoxContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      sixBoxRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 35,
        marginRight: 35,
        height: '25%',
      },
      sixBoxBoxes: {
        width: '50%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        margin: 25,
        justifyContent: 'center',
      },
      sixBoxNumber: {
        fontSize: 80,
        textAlign: 'center',
        color: 'black',
      },


    //9 Box
    nineBoxContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      nineBoxRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 35,
        marginRight: 35,
        height: '25%',
      },
      nineBoxBoxes: {
        width: '33%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 25,
      },
      nineBoxNumber: {
        fontSize: 80,
        textAlign: 'center',
        color: 'black',
      },
});

    
