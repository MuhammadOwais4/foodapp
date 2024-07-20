import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  ActivityIndicator,
  useColorScheme,
} from 'react-native';

const Loader = ({ modalVisible, setModalVisible }) => {
  const colorScheme = useColorScheme(); // Detect current theme (light or dark)

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
    >
      <View style={styles.centeredView(colorScheme)}>
        <View style={styles.modalView(colorScheme)}>
          <ActivityIndicator size={'large'} color={colorScheme === 'dark' ? '#fff' : '#000'} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: (colorScheme) => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorScheme === 'dark' ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.5)',
  }),
  modalView: (colorScheme) => ({
    margin: 20,
    backgroundColor: colorScheme === 'dark' ? '#333' : '#fff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: colorScheme === 'dark' ? '#000' : '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }),
});

export default Loader;
