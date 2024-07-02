import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Loader from '../common/Loader';
import ApiHandler from '../../api/apihandler'; 

const UserSignup = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [loading, setLoading] = useState(false);

  const api = ApiHandler();

  const handleSignup = async () => {
    setLoading(true);

    try {
      const response = await api.post('/signup', {
        username,
        email,
        phone,
        password,
        gender,
      });

      if (response.status === 201) { 
        setLoading(false);
        Alert.alert('Success', 'Signup successful!', [
          { text: 'OK', onPress: () => navigation.navigate('UserLogin') }
        ]);
      } else {
        setLoading(false);
        Alert.alert('Error', 'Signup failed. Please try again.');
      }
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', error.message || 'Signup failed. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Name'}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Email'}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Mobile'}
        value={phone}
        onChangeText={setPhone}
        keyboardType={'number-pad'}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Password'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.genderinput}
        placeholder={'Gender'}
        value={gender}
        onChangeText={setGender}
      />
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={handleSignup}
        disabled={loading}
      >
        <Text style={styles.btnText}>Sign up</Text>
      </TouchableOpacity>
      {loading && <Loader />}
    </View>
  );
};

export default UserSignup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#000',
    marginTop: 100,
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
  genderinput: {
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
});
