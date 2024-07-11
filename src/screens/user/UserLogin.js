import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import Loader from '../common/Loader';
import { translation } from '../../utils';

import facebookIcon from '../../images/facebook.png';
import googleIcon from '../../images/google.png';

const UserLogin = ({ navigation }) => {
  const [selectedLang, setSelectedLang] = useState(0);
  const [loading, setLoading] = useState(false);

  const [LoginData, setLoginData] = useState({
    email: 'owais@gmail.com',
    password: '123456',
  });

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
        {selectedLang === 0
          ? translation[1].English
          : selectedLang === 1
          ? translation[1].Tamil
          : selectedLang === 2
          ? translation[1].Hindi
          : selectedLang === 3
          ? translation[1].Punjabi
          : selectedLang === 4
          ? translation[1].Urdu
          : null}
      </Text>
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Email'}
        value={LoginData.email}
        onChangeText={(text) => setLoginData({ ...LoginData, email: text })}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Password'}
        secureTextEntry={true}
        value={LoginData.password}
        onChangeText={(text) => setLoginData({ ...LoginData, password: text })}
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

      <View style={styles.socialLogin}>
        <TouchableOpacity style={styles.socialIcon}>
          <Image source={facebookIcon} style={styles.socialImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Image source={googleIcon} style={styles.socialImage} />
        </TouchableOpacity>
      </View>
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
    backgroundColor: '#E98B07',
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
  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  socialIcon: {
    marginHorizontal: 10,
  },
  socialImage: {
    width: 50,
    height: 50,
  },
});
