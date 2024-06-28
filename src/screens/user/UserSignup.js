import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Loader from '../common/Loader';

const UserSignup = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const handleSignup = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('UserLogin');
    }, 5000); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Name'}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Email'}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Mobile'}
        keyboardType={'number-pad'}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Password'}
      />
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={handleSignup}
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
});
