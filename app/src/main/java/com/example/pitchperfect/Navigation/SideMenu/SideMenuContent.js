import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';

const SideMenuContent = () =>
{
// Constants 
    const navigation = useNavigation(); // Para nav

// Actual Layout
return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.closeDrawer()}>
        <Text>Close Drawer</Text>
      </TouchableOpacity>
      {/* Add other menu items here */}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export default SideMenuContent;