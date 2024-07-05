import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import Loader from '../common/Loader';

const UserSignup = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

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
      navigation.navigate('QuickBite');
    }, 2000);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Sign up</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={'Enter Name'}
          value={signUpData.username}
          onChangeText={(value) => handleInputChange('username', value)}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder={'Enter Email'}
          value={signUpData.email}
          onChangeText={(value) => handleInputChange('email', value)}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder={'Enter Mobile'}
          value={signUpData.phone}
          keyboardType={'number-pad'}
          onChangeText={(value) => handleInputChange('phone', value)}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder={'Enter Password'}
          value={signUpData.password}
          secureTextEntry={true}
          onChangeText={(value) => handleInputChange('password', value)}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder={'Gender'}
          value={signUpData.gender}
          onChangeText={(value) => handleInputChange('gender', value)}
        />
        <TouchableOpacity
          style={styles.signUpBtn}
          onPress={handleSignUp}
        >
          <Text style={styles.btnText}>Sign up</Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('UserLogin')}>
            <Text style={[styles.loginText, styles.loginLink]}>Login</Text>
          </TouchableOpacity>
        </View>
        {loading && <Loader />}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UserSignup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    color: '#000',
    marginBottom: 40,
  },
  inputStyle: {
    paddingLeft: 20,
    height: 50,
    width: '90%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  signUpBtn: {
    backgroundColor: 'orange',
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
    color: '#fff',
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  loginText: {
    fontSize: 16,
    color: '#666',
  },
  loginLink: {
    marginLeft: 5,
    color: '#fff',
    textDecorationLine: 'underline',
  },
});
