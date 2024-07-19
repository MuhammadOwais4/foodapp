import { View, Text, StyleSheet, Image, useColorScheme } from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({ navigation }) => {
  const scheme = useColorScheme(); 

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
      navigation.navigate('intro1'); 
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../images/Logo.png')} />
      <Text style={[styles.logo, scheme === 'dark' ? styles.logoDark : styles.logoLight]}>Quick-Bite</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 30,
    fontWeight: '800',
  },
  logoLight: {
    color: '#E98B07',
  },
  logoDark: {
    color: '#fff', 
  },
});

export default Splash;
