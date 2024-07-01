import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import rncStyles from 'rncstyles';
import Header from './Header';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import DocumentPicker from 'react-native-document-picker';
const { width } = Dimensions.get('window');

const EiditProfile = () => {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState('Muhammad Owais');
  const [email, setEmail] = useState('muhammadowais@gmail.com');
  const [gender, setGender] = useState('Male');
  const [contact, setContact] = useState('+92 0321 2484 162');
  const [document, setdoucment] = useState('');

  const  handleimagechane=  async ()=>{
    const doc = await DocumentPicker.pick({
      type: [DocumentPicker.types.images],
    });
    const selectedFile = doc?.[0];
    setdoucment(selectedFile.uri)
    console.log(selectedFile);
  


  }
  return (
    <>
      <View style={styles.container}>
        <Header title={'Profile'} />
      </View>
      <View style={[rncStyles.h100, rncStyles.bgWhite]}>
        <View style={[rncStyles.h100, rncStyles.justifyContentCenter]}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.profileSection}>
              <View style={styles.imageContainer}>
                <Image
                  resizeMode='contain'
                  style={styles.profileImage}
                  source={{
                    uri: document ?? 'content://com.android.providers.downloads.documents/document/raw%3A%2Fstorage%2Femulated%2F0%2FDownload%2Fimages%20(1).jpeg'
                  }}
                />
                <TouchableOpacity style={styles.iconContainer} onPress={handleimagechane}>
                  <Icon name="camera-retro" size={25} color={'white'} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.infoSection}>
              {renderInfoItem('Full Name', fullName, setFullName)}
              {renderInfoItem('Email', email, setEmail)}
              {renderInfoItem('Gender', gender, setGender)}
              {renderInfoItem('Contact', contact, setContact)}
              <View style={styles.buttonContainer}>
                <TouchableOpacity 
                  style={[rncStyles.btnPrimary, rncStyles.rounded, styles.cancelButton]} 
                  onPress={() => {navigation.navigate('Profile');}}
                >
                  <Text style={[rncStyles.fs5, rncStyles.textWhite, rncStyles.textCenter]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[rncStyles.btnPrimary, rncStyles.rounded, styles.saveButton]} 
                  onPress={() => {navigation.navigate('Profile');}}
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
}

const renderInfoItem = (label, value, setValue) => (
  <View style={styles.infoItem}>
    <Text style={[rncStyles.textSecondary, rncStyles.textBold]}>{label}</Text>
    <TextInput
      style={[rncStyles.textPrimary, rncStyles.textBold, rncStyles.fs3]}
      value={value}
      onChangeText={setValue}
      placeholder={label}
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

export default EiditProfile;
