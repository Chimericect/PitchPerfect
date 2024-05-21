import React, { useState } from 'react';
import {
  View,Text, TouchableOpacity, Modal, FlatList,StyleSheet,
} from 'react-native';

const Dropdown = ({ items, selectedItem, onSelect }) => {
const [isOpen, setIsOpen] = useState(false);


const toggleDropdown = () => {
    setIsOpen(!isOpen);
};
  return (
      <View>
      <TouchableOpacity style= {styles.dropdownButtonStyle}  onPress={toggleDropdown}>
      <Text style={styles.whiteText}>
            {selectedItem ? selectedItem.label : 'Select an option'}
          </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={toggleDropdown}>
        <View style={styles.modalContainer}>
          <View style={styles.dropdownContent}>
            <FlatList
              data={items} // items that we pass in when we call it later
              keyExtractor={(item) => item.value} // extract key at an index
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.listItem}
                  onPress={() => {
                    onSelect(item); // executes function
                    setIsOpen(false); // closes it
                  }}>
                  <Text style={styles.listItemText}>{item.label}</Text>
                  <View style={styles.separator} />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    
  },
  dropdownContent: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    height: '50%',
    shadowColor: '#000000',
    borderRadius:20
  },
  listItem: {
    alignItems: 'center', // Center items horizontally within the listItem

  },
  listItemText: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10
  },
  dropdownButtonStyle: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 100, // Rounded corners
    padding:10,
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
},
whiteText: {
  
  fontSize: 20,
  textAlign: 'left',
  color: 'white'
},
separator: {
  borderBottomWidth: 1, // Add a bottom border to separate items
  borderBottomColor: '#ccc', // Border color
  width: '90%', 
  margin: 5
},
});

export default Dropdown;

