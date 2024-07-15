import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import LanguageModal from '../common/LangaugeModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {translation} from '../../utils';
import Loader from '../common/Loader';


const SelectLogin = ({navigation}) => {
  const [langModalVisible, setLangModalVisible] = useState(false);
  const [selectedLang, setSelectedLang] = useState(0);
  const [loading, setLoading] = useState(false);
  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('UserLogin');
    }, 5000); 
  };

  const saveSelectedLang = async index => {
    await AsyncStorage.setItem('LANG', index + '');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
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
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text style={styles.btnText}>Seller Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('UserSignup');
        }}>
        <Text style={styles.btnText}>User Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.selectLangaugeBtn}
        onPress={() => {
          setLangModalVisible(!langModalVisible);
        }}>
        <Text>Select Language</Text>
      </TouchableOpacity>
      <LanguageModal
        langModalVisible={langModalVisible}
        setLangModalVisible={setLangModalVisible}
        onSelectLang={x => {
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
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  btn: {
    backgroundColor: '#E98B07',
    height: 50,
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  selectLangaugeBtn: {
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
});
