import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity, TextInput, useColorScheme } from 'react-native';
import rncStyles from 'rncstyles';
import Header from './Header';
import { useNavigation } from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import profile from '../../images/profile_fill.png';
import cameraIcon from '../../images/carmea.png';

const { width } = Dimensions.get('window');

const EditProfile = () => {
  const navigation = useNavigation();
  const scheme = useColorScheme(); // Get the current color scheme ('dark' or 'light')

  const [fullName, setFullName] = useState('Muhammad Owais');
  const [email, setEmail] = useState('muhammadowais@gmail.com');
  const [gender, setGender] = useState('Male');
  const [contact, setContact] = useState('+92 0321 2484 162');
  const [document, setDocument] = useState('');

  const handleImageChange = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      const selectedFile = doc?.[0];
      setDocument(selectedFile.uri);
      console.log(selectedFile);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('User cancelled image selection');
      } else {
        console.error('Error picking image', error);
      }
    }
  };

  return (
    <>
      <View style={[styles.container, { backgroundColor: scheme === 'dark' ? '#000' : '#fff' }]}>
        <Header title={'Profile'} />
      </View>
      <View style={[rncStyles.h100, rncStyles.bgWhite]}>
        <View style={[rncStyles.h100, rncStyles.justifyContentCenter]}>
          <ScrollView contentContainerStyle={[styles.scrollViewContent, { backgroundColor: scheme === 'dark' ? '#111' : '#f0f0f0' }]}>
            <View style={styles.profileSection}>
              <View style={styles.imageContainer}>
                <Image
                  resizeMode='contain'
                  style={styles.profileImage}
                  source={document ? { uri: document } : profile}
                />
                <TouchableOpacity style={styles.iconContainer} onPress={handleImageChange}>
                  <Image
                    source={cameraIcon}
                    style={styles.cameraIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.infoSection}>
              {renderInfoItem('Full Name', fullName, setFullName, scheme)}
              {renderInfoItem('Email', email, setEmail, scheme)}
              {renderInfoItem('Gender', gender, setGender, scheme)}
              {renderInfoItem('Contact', contact, setContact, scheme)}
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[rncStyles.btnPrimary, rncStyles.rounded, styles.cancelButton]}
                  onPress={() => { navigation.navigate('Profile'); }}
                >
                  <Text style={[rncStyles.fs5, rncStyles.textWhite, rncStyles.textCenter]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[rncStyles.btnPrimary, rncStyles.rounded, styles.saveButton]}
                  onPress={() => { navigation.navigate('Profile'); }}
                >
                  <Text style={[rncStyles.fs5, rncStyles.textWhite, rncStyles.textCenter]}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

const renderInfoItem = (label, value, setValue, scheme) => (
  <View style={styles.infoItem}>
    <Text style={[rncStyles.textSecondary, rncStyles.textBold, { color: scheme === 'dark' ? '#ccc' : '#333' }]}>{label}</Text>
    <TextInput
      style={[rncStyles.textPrimary, rncStyles.textBold, rncStyles.fs3, { color: scheme === 'dark' ? '#fff' : '#000' }]}
      value={value}
      onChangeText={setValue}
      placeholder={label}
      placeholderTextColor={scheme === 'dark' ? '#888' : '#666'}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    paddingVertical: 20,
    paddingHorizontal: width * 0.05,
  },
  profileSection: {
    paddingBottom: 20,
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 12.5,
    padding: 5,
  },
  cameraIcon: {
    width: 25,
    height: 25,
  },
  infoSection: {
    paddingVertical: 20,
  },
  infoItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: 'red',
    flex: 1,
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: 'green',
    flex: 1,
    marginLeft: 10,
  },
});

export default EditProfile;
