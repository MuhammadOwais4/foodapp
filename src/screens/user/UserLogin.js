import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Loader from '../common/Loader'; 
import { translation } from '../../utils';

const UserLogin = ({ navigation }) => {
  const [selectedLang, setSelectedLang] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Home');
    }, 5000); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {selectedLang == 0
          ? translation[1].English
          : selectedLang == 1
          ? translation[1].Tamil
          : selectedLang == 2
          ? translation[1].Hindi
          : selectedLang == 3
          ? translation[1].Punjabi
          : selectedLang == 4
          ? translation[1].Urdu
          : null}
      </Text>
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Email'}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Password'}
      />
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={handleLogin}
      >
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <Text
        style={styles.createNewAccount}
        onPress={() => {
          navigation.navigate('UserSignup');
        }}
      >
        Create New Account
      </Text>
      {loading && <Loader />}
    </View>
  );
};

export default UserLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#000',
    marginTop: 100,
    alignSelf: 'center',
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
  loginBtn: {
    backgroundColor: 'orange',
    width: '90%',
    height: 50,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  createNewAccount: {
    fontSize: 18,
    fontWeight: '600',
    textDecorationLine: 'underline',
    marginTop: 50,
    alignSelf: 'center',
  },
});
