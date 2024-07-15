import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { TouchableOpacity } from 'react-native-gesture-handler'; // Example import for navigation

const { width } = Dimensions.get('window');

const restaurant = {
  name: 'Gourmet Paradise',
  address: '123 Delicious Ave, Food City, FC 12345',
  phone: '+1 (555) 123-4567',
  sliderImages: [
    require('../images/sliderImages1.jpeg'),
    require('../images/sliderImages2.jpeg'),
    require('../images/sliderImages3.jpeg'),
  ],
  coverImage: require('../images/coverimage.jpg'),
};

const RestaurantProfileScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <Image source={item} style={styles.sliderImage} />
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        <Image source={restaurant.coverImage} style={styles.coverImage} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{restaurant.name}</Text>
          <Text style={styles.address}>{restaurant.address}</Text>
          <Text style={styles.phone}>{restaurant.phone}</Text>
        </View>
        <Carousel
          data={restaurant.sliderImages}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={width}
          layout={'default'}
        />
      </ScrollView>
      <TouchableOpacity
        style={styles.bottomNavigationButton}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <Text>Go to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  coverImage: {
    width: '100%',
    height: 250,
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 16,
    color: '#666',
    marginVertical: 8,
  },
  phone: {
    fontSize: 16,
    color: '#666',
  },
  sliderImage: {
    width: '100%',
    height: 200,
  },
  bottomNavigationButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
});

export default RestaurantProfileScreen;
