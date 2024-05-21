import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <AntDesign name="menuunfold" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

export default Header;