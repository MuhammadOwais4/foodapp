import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      checkLogin();
    }, 3000);
  }, []);
  const checkLogin = async () => {
    const email = await AsyncStorage.getItem('EMAIL');
    console.log(email);
    if (email !== null) {
      navigation.navigate('Home');
    } else {
      navigation.navigate('SelectLogin');
    }
  };
  return (
    <View style={styles.container}>
      <Image source={require('../images/logo.png')} />
      <Text style={styles.logo}>Quick-Bite</Text>
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 30,
    fontWeight: '800',
    color: '#E98B07',
  },
});
