import React from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
import rncStyles from 'rncstyles';
import Header from '../../common/Header';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Profile = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Header title={'Profile'} />
      </View>
      <View style={[rncStyles.h100, rncStyles.bgWhite]}>
        <View style={[rncStyles.h100, rncStyles.justifyContentCenter]}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.profileSection}>
              <View style={rncStyles.flexCenter}>
                <Image
                  resizeMode='contain'
                  style={styles.profileImage}
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8xKaQDRmiaG94pbm-BCrgPSZRksQ_BSGxmY3qGxEPI_DYyVLB2QpDM02N81rto21mths&usqp=CAU'
                  }}
                />
              </View>
              <View style={rncStyles.flexCenter}>
                <Text style={[rncStyles.fs1, rncStyles.textPrimary, rncStyles.textBold, rncStyles.mb1]}>Muhammad Owais</Text>
                <Text style={[rncStyles.fs5, rncStyles.textSecondary]}>@Muhammad_owais</Text>
                <TouchableOpacity style={[rncStyles.btnPrimary, rncStyles.mt1]}>
                  <Text style={rncStyles.textWhite}>Edit Profile</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.infoSection}>
              {renderInfoItem('Full Name', 'Muhammad Owais')}
              {renderInfoItem('Email', 'muhammadowais@gmail.com')}
              {renderInfoItem('Gender', 'Male')}
              {renderInfoItem('Contact', '+92 0321 2484 162')}
              <View style={styles.logoutButtonContainer}>
                <TouchableOpacity style={[rncStyles.btnPrimary, rncStyles.rounded]} onPress={() => {navigation.navigate('UserLogin');}}>
                  <Text style={[rncStyles.fs5, rncStyles.textWhite, rncStyles.textCenter]}>Logout</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

const renderInfoItem = (label, value) => (
  <View style={styles.infoItem}>
    <Text style={[rncStyles.textSecondary, rncStyles.textBold]}>{label}</Text>
    <Text style={[rncStyles.textPrimary, rncStyles.textBold, rncStyles.fs3]}>{value}</Text>
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
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
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
  logoutButtonContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
});

export default Profile;
