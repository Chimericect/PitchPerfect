import React, { useRef, useState } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity, Picker, SafeAreaView } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { useDataPoints } from './handlePitchData';


const HeaderOne = () => {
  const { addDataPoint } = useDataPoints();

    return (
      <View style={styles.headerOneContainer}>
        <View style = {styles.headerOneName}>
        <TouchableOpacity><Text style={styles.pitcherName}>Pitchers Name Here</Text></TouchableOpacity>
        </View>
        <View style = {styles.headerOneAddPitch}>
        <TouchableOpacity onPress={addDataPoint}>
        <Ionicons
          name={'add-circle'}
          size={40}
          color="gray"
        />
      </TouchableOpacity>
        </View>
      </View>
      
    );
  };

const HeaderTwo = () => {
    const { dataPoints } = useDataPoints();
    
    return (
      <View style={styles.headerTwoStyle}>
        <Text style={styles.headerText}>Pitch Type</Text>
        <Text style={styles.headerText}>Target Spot</Text>
        <Text style={styles.headerText}>Location Hit</Text>
      </View>
    );
  };

  const DataList = ({ data }) => {
    const flatListRef = useRef();
    const renderItem = ({ item, index }) => (
      <View
        key={index}
        style={[
          styles.dataItem,
          { backgroundColor: index % 2 === 0 ? 'white' : '#ECECEC' },
        ]}
      >
        <Text style={styles.dataText}>{item.pitchType}</Text>
        <Text style={styles.dataText}>{item.targetSpot}</Text>
        <Text style={styles.dataText}>{item.didHit}</Text>
      </View>
    );
    
    return (
      <SafeAreaView style={styles.safeArea}>
      <View style = {styles.ViewContainer}>
        <HeaderOne />
        <HeaderTwo />
        
        <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
        style={styles.flatList}
      />
      </View>
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
    headerOneContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        borderTopLeftRadius: '30%',
        borderTopRightRadius: '30%',
        width: '100%',
        paddingHorizontal: 15
        },

    headerOneName: {
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderTopLeftRadius: '30%',
        borderTopRightRadius: '30%',
        marginRight: '15%'
        },

    headerOneAddPitch: {
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        },
    
    headerTwoStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 26,
        backgroundColor: '#ECECEC',
        },

    pitcherName: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 8,
        },

    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 8,
        },

    dataItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '10%',
        paddingRight: '15%',
        paddingTop: '1%',
        paddingBottom: '1%'
        },
    dataText: {
        fontSize: 16,
        textAlign: 'center',
        paddingVertical: 8,
        },

    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        },

        flatList: {
          marginBottom: '20%', // Adjust this value based on your bottom navigation bar's height
        },

});

export default DataList;
