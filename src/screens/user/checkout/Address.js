import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, useColorScheme } from 'react-native';
import { useDispatch } from 'react-redux';
import { setAddress } from '../../../Redux/reducer';

const Address = ({ navigation }) => {
  const dispatch = useDispatch();
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [contact, setContact] = useState('');

  const saveAddress = () => {
    const address = {
      street,
      city,
      contact,
    };
    dispatch(setAddress(address));
    navigation.navigate('Payment');
  };

  const colorScheme = useColorScheme(); // Detect current theme (light or dark)

  return (
    <View style={styles.container(colorScheme)}>
      <TextInput
        style={styles.inputStyle(colorScheme)}
        placeholder={'Enter Street'}
        value={street}
        onChangeText={setStreet}
      />
      <TextInput
        style={styles.inputStyle(colorScheme)}
        placeholder={'Enter City'}
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.inputStyle(colorScheme)}
        placeholder={'Enter Contact'}
        value={contact}
        onChangeText={setContact}
        maxLength={12}
        keyboardType="number-pad"
      />
      <TouchableOpacity style={styles.addNewBtn(colorScheme)} onPress={saveAddress}>
        <Text style={styles.btnText(colorScheme)}>Save Address</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: (colorScheme) => ({
    flex: 1,
    padding: 16,
    backgroundColor: colorScheme === 'dark' ? '#333' : '#fff',
  }),
  inputStyle: (colorScheme) => ({
    paddingLeft: 20,
    height: 50,
    alignSelf: 'center',
    marginTop: 30,
    borderWidth: 0.5,
    borderRadius: 10,
    width: '90%',
    borderColor: colorScheme === 'dark' ? '#555' : '#ccc',
    backgroundColor: colorScheme === 'dark' ? '#444' : '#fff',
    color: colorScheme === 'dark' ? '#fff' : '#000',
  }),
  addNewBtn: (colorScheme) => ({
    width: '90%',
    height: 50,
    backgroundColor: colorScheme === 'dark' ? '#ff9800' : 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    borderRadius: 10,
  }),
  btnText: (colorScheme) => ({
    color: colorScheme === 'dark' ? '#000' : '#fff',
    fontSize: 16,
    fontWeight: '600',
  }),
});

export default Address;
