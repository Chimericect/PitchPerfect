import React from 'react';
import { View, StyleSheet } from 'react-native';

export const pitchDot = ({ coordinates }) => {
  if (!coordinates) {
    return null;
  }

  return (
    <View
      style={[
        styles.dot,
        {
          left: coordinates.x - 5,
          top: coordinates.y - 5,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  dot: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
  },
});

export default Dot;
