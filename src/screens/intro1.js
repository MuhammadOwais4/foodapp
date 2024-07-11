import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel'; 

import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import FreshMealsImage from '../images/FreshMeals.png';
import time from '../images/time.png';
import history from '../images/history.png'; 

const { width } = Dimensions.get('window');

const Intro1 = () => {
  const navigation = useNavigation();

  const slides = [
    {
      key: 'intro1',
      image: FreshMealsImage,
      title: 'Fresh Meals',
      subtitle: 'Discover fresh, healthy meals delivered straight to your door.'
    },
    {
      key: 'intro2',
      image: time,
      title: 'Quick Delivery',
      subtitle: 'Get your meals delivered in under 30 minutes.'
    },
    {
      key: 'intro3',
      image: history,
      title: 'Start Today!',
      subtitle: 'Start your culinary journey with us today!'
    }
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('SelectLogin')}>
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>
      <Carousel
        data={slides}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width * 0.8} 
        onSnapToItem={(index) => {
          if (index === slides.length - 1) {
            navigation.navigate('SelectLogin');
          }
        }}
      />
      <View style={styles.indicatorContainer}>
        {slides.map((_, index) => (
          <View key={index}  />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
  },
  skipButton: {
    position: 'absolute',
    top: hp('5%'),
    right: wp('5%'),
  },
  skipButtonText: {
    color: '#FF6347',
    fontSize: wp('4%'),
  },
  slide: {
    paddingHorizontal: wp('5%'),
  },
  image: {
    width: '100%', 
    height: hp('40%'),
    resizeMode: 'contain',
  },
  title: {
    fontSize: wp('8%'),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: hp('5%'),
    color: '#000',
  },
  subtitle: {
    fontSize: wp('4%'),
    textAlign: 'center',
    marginTop: hp('2%'),
    color: '#555',
  },
  indicatorContainer: {
    flexDirection: 'row',
    marginTop: hp('5%'),
  },
  activeIndicator: {
    backgroundColor: '#FF6347',
  },
});

export default Intro1;
