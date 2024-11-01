import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Image,
  useColorScheme,
} from 'react-native';
import Loader from '../common/Loader';

import facebookIcon from '../../images/facebook.png';
import googleIcon from '../../images/google.png';

const UserSignup = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const scheme = useColorScheme(); // Detect light or dark mode

  const [signUpData, setSignUpData] = useState({
    username: 'owais',
    email: 'owais@gmail.com',
    phone: '1234567890',
    password: '123456',
    gender: 'Male',
  });

  const handleInputChange = (name, value) => {
    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  };

  const handleSignUp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('UserLogin');
    }, 2000);
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, scheme === 'dark' ? styles.containerDark : styles.containerLight]}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={[styles.title, scheme === 'dark' ? styles.textDark : styles.textLight]}>
          Sign up
        </Text>
        <TextInput
          style={[styles.inputStyle, scheme === 'dark' ? styles.inputDark : styles.inputLight]}
          placeholder={'Enter Name'}
          placeholderTextColor={scheme === 'dark' ? '#aaa' : '#888'}
          value={signUpData.username}
          onChangeText={(value) => handleInputChange('username', value)}
        />
        <TextInput
          style={[styles.inputStyle, scheme === 'dark' ? styles.inputDark : styles.inputLight]}
          placeholder={'Enter Email'}
          placeholderTextColor={scheme === 'dark' ? '#aaa' : '#888'}
          value={signUpData.email}
          onChangeText={(value) => handleInputChange('email', value)}
        />
        <TextInput
          style={[styles.inputStyle, scheme === 'dark' ? styles.inputDark : styles.inputLight]}
          placeholder={'Enter Mobile'}
          placeholderTextColor={scheme === 'dark' ? '#aaa' : '#888'}
          value={signUpData.phone}
          keyboardType={'number-pad'}
          onChangeText={(value) => handleInputChange('phone', value)}
        />
        <TextInput
          style={[styles.inputStyle, scheme === 'dark' ? styles.inputDark : styles.inputLight]}
          placeholder={'Enter Password'}
          placeholderTextColor={scheme === 'dark' ? '#aaa' : '#888'}
          secureTextEntry={true}
          value={signUpData.password}
          onChangeText={(value) => handleInputChange('password', value)}
        />
        <TextInput
          style={[styles.inputStyle, scheme === 'dark' ? styles.inputDark : styles.inputLight]}
          placeholder={'Gender'}
          placeholderTextColor={scheme === 'dark' ? '#aaa' : '#888'}
          value={signUpData.gender}
          onChangeText={(value) => handleInputChange('gender', value)}
        />
        <TouchableOpacity
          style={[styles.signUpBtn, scheme === 'dark' ? styles.btnDark : styles.btnLight]}
          onPress={handleSignUp}
        >
          <Text style={[styles.btnText, scheme === 'dark' ? styles.textDark : styles.textLight]}>
            Sign up
          </Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Text style={[styles.loginText, scheme === 'dark' ? styles.textDark : styles.textLight]}>
            Have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('UserLogin')}>
            <Text style={[styles.loginText, scheme === 'dark' ? styles.textDark : styles.textLight, styles.loginLink]}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        {loading && <Loader />}
        
        {/* Social login icons */}
        <View style={styles.socialLogin}>
          <TouchableOpacity style={styles.socialIcon}>
            <Image source={facebookIcon} style={styles.socialImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Image source={googleIcon} style={styles.socialImage} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UserSignup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLight: {
    backgroundColor: '#fff',
  },
  containerDark: {
    backgroundColor: '#000',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  inputStyle: {
    paddingLeft: 20,
    height: 50,
    width: '90%',
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  signUpBtn: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: '600',
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  loginText: {
    fontSize: 16,
  },
  loginLink: {
    marginLeft: 5,
    textDecorationLine: 'underline',
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
  // Light mode styles
  textLight: {
    color: '#000', // Black text for light mode
  },
  inputLight: {
    color: '#000', // Black text for light mode
    borderColor: '#ccc', // Light border color for light mode
  },
  btnLight: {
    backgroundColor: '#E98B07',
  },
  // Dark mode styles
  textDark: {
    color: '#fff', // White text for dark mode
  },
  inputDark: {
    color: '#fff', // White text for dark mode
    borderColor: '#444', // Dark border color for dark mode
  },
  btnDark: {
    backgroundColor: '#333', // Dark background for button in dark mode
  },
});
