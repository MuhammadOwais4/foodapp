import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { setAddress } from '../../../Redux/reducer';

const Address = ({ navigation }) => {
  const dispatch = useDispatch();
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [contact, setContact] = useState('');

  const saveAddress = () => {
    const address = {
      street,
      city,
      pincode,
      contact,
    };
    dispatch(setAddress(address));
    navigation.navigate('Checkout');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Street'}
        value={street}
        onChangeText={setStreet}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter City'}
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Pincode'}
        value={pincode}
        onChangeText={setPincode}
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Contact'}
        value={contact}
        onChangeText={setContact}
        maxLength={12}
        keyboardType="number-pad"
      />
      <TouchableOpacity style={styles.addNewBtn} onPress={saveAddress}>
        <Text style={styles.btnText}>Save Address</Text>
      </TouchableOpacity>
    </View>
  );
};

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

export default Address;
