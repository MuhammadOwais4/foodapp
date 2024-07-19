import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SellerProfile = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My profile</Text>
        <Icon name="search" size={20} color="#000" style={styles.searchIcon} />
      </View>
      <View style={styles.profileInfo}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8xKaQDRmiaG94pbm-BCrgPSZRksQ_BSGxmY3qGxEPI_DYyVLB2QpDM02N81rto21mths&usqp=CAU' }}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.profileName}>Matilda Brown</Text>
          <Text style={styles.profileEmail}>matildabrown@mail.com</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.listItem} onPress={() => navigation && navigation.navigate('Products')}>
        <Text style={styles.listText}>My Products</Text>
        <Image source={require('../images/chevron-right.png')} style={styles.chevron} /> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.listItem} onPress={() => navigation && navigation.navigate('AddItem')}>
        <Text style={styles.listText}>Add Products</Text>
        <Image source={require('../images/chevron-right.png')} style={styles.chevron} /> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.listItem} onPress={() => navigation && navigation.navigate('EditItem')}>
        <Text style={styles.listText}>Edit Products</Text>
        <Image source={require('../images/chevron-right.png')} style={styles.chevron} /> 
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchIcon: {
    marginRight: 16,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  listText: {
    fontSize: 16,
  },
  chevron: {
    width: 16,
    height: 16,
    tintColor: '#000', // Adjust as needed
  },
});

export default SellerProfile;
