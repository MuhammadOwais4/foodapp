import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const AddNewAddress = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Street'}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter City '}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Pincode'}
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Contact '}
        maxLength={12}
        keyboardType="number-pad"
      />
      <TouchableOpacity
        style={styles.addNewBtn}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={styles.btnText}>Save Address</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddNewAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  inputStyle: {
    paddingLeft: 20,
    height: 50,
    alignSelf: 'center',
    marginTop: 30,
    borderWidth: 0.5,
    borderRadius: 10,
    width: '90%',
  },
  addNewBtn: {
    width: '90%',
    height: 50,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    borderRadius: 10,
  },
  btnText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
});
