import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { translation } from '../../utils';
import Loader from '../common/Loader';

const SelectLogin = ({ navigation }) => {
  const [langModalVisible, setLangModalVisible] = useState(false);
  const [selectedLang, setSelectedLang] = useState(0);
  const [loading, setLoading] = useState(false);
  const scheme = useColorScheme();

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('UserLogin');
    }, 5000);
  };

  const saveSelectedLang = async (index) => {
    await AsyncStorage.setItem('LANG', index + '');
  };

  return (
    <View style={[styles.container, scheme === 'dark' ? styles.containerDark : styles.containerLight]}>
      <Text style={[styles.title, scheme === 'dark' ? styles.textDark : styles.textLight]}>
        {selectedLang == 0
          ? translation[0].English
          : selectedLang == 1
          ? translation[0].Tamil
          : selectedLang == 2
          ? translation[0].Hindi
          : selectedLang == 3
          ? translation[0].Punjabi
          : selectedLang == 4
          ? translation[0].Urdu
          : null}
      </Text>
      <TouchableOpacity style={[styles.btn, scheme === 'dark' ? styles.btnDark : styles.btnLight]} onPress={() => { navigation.navigate('Login'); }}>
        <Text style={styles.btnText}>Seller Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, scheme === 'dark' ? styles.btnDark : styles.btnLight]} onPress={() => { navigation.navigate('UserSignup'); }}>
        <Text style={styles.btnText}>User Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.selectLanguageBtn, scheme === 'dark' ? styles.selectLanguageBtnDark : styles.selectLanguageBtnLight]}
        onPress={() => { setLangModalVisible(!langModalVisible); }}>
        <Text style={scheme === 'dark' ? styles.textDark : styles.textLight}>Select Language</Text>
      </TouchableOpacity>
      <LanguageModal
        langModalVisible={langModalVisible}
        setLangModalVisible={setLangModalVisible}
        onSelectLang={(x) => {
          setSelectedLang(x);
          saveSelectedLang(x);
        }}
      />
      {loading && <Loader />}
    </View>
  );
};

export default SelectLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLight: {
    backgroundColor: '#fff',
  },
  containerDark: {
    backgroundColor: '#000',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#E98B07',
    height: 50,
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  btnLight: {
    backgroundColor: '#E98B07',
  },
  btnDark: {
    backgroundColor: '#333',
  },
  selectLanguageBtn: {
    width: '50%',
    height: 50,
    borderWidth: 0.2,
    borderRadius: 10,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  selectLanguageBtnLight: {
    borderColor: '#888',
  },
  selectLanguageBtnDark: {
    borderColor: '#555',
  },
  textLight: {
    color: '#000',
  },
  textDark: {
    color: '#fff',
  },
});
