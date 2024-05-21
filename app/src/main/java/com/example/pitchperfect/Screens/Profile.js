import * as React from 'react';
import { View,Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function ProfileScreen() {
   const status = "pitcher"

   return (
<View style={styles.screenContainer}>

<View style={styles.topHalf}><Text style={{fontSize:16,fontWeight:'700'}}>Profile Screen</Text></View>

<View style={styles.bottomHalf}>
  {status === "pitcher" && (
    <Text style = {styles.title}>My Sessions</Text>
  )}
  
  {status === "coach" && (
    <Text>My Pitchers</Text>
  )}
  
  {status === "director" && (
    <Text>My Teams</Text>
  )}

  <ScrollView style = {styles.itemScroll}>
   <Text>"AAAAA"</Text>
  </ScrollView>

</View>
</View>

   );
 }

 const styles = StyleSheet.create(
   {
      screenContainer: {
         flex: 1,
         width: '100%',
         height: '100%'
      },

      topHalf: {
         position: 'absolute',
         width: '100%',
         height: '25%',
         backgroundColor: 'lightgrey',
         paddingTop: '8%',
         top: 0,
         left: 0, 
         right: 0, // Position it at the right edge
      },
      
      bottomHalf: {
         position: 'absolute',
         width: '100%',
         height: '75%',
         backgroundColor: 'lightblue',
         padding: 10,
         bottom: 0,
         left: 0, 
         right: 0, // Position it at the right edge
      },

      itemScroll: {
         backgroundColor: '#0FFF4F',
      },

      title: {
         fontSize: 25,
         padding: 5,
      }
   }
 )