import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, useColorScheme } from 'react-native';

const Intro2 = ({ navigation }) => {
  const imageSource = require('../images/rider.png'); 
  const chevronSource = require('../images/chevron-right.png');
  const scheme = useColorScheme(); 

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={imageSource} 
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.title, scheme === 'dark' ? styles.textDark : styles.textLight]}>Fast Delivery</Text>
        <Text style={[styles.description, scheme === 'dark' ? styles.textDark : styles.textLight]}>
        The dish is artfully drizzled with a velvety balsamic glaze, creating a harmonious blend of sweet and savory notes that dance on your palate. Each  bite is a journey through a culinary wonderland, where freshness meets finesse
        </Text>
      </View>
      <View style={styles.pagination}>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('SelectLogin')}>
          <Text style={[styles.skip, scheme === 'dark' ? styles.textDark : styles.textLight]}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('intro3')}>
          <Image source={chevronSource} style={styles.chevronIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'space-between',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  activeDot: {
    backgroundColor: '#ff6347',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  skip: {
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#ff6347',
    padding: 15,
    borderRadius: 50,
  },
  chevronIcon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  textLight: {
    color: '#000', 
  },
  textDark: {
    color: '#fff', 
  },
});

export default Intro2;
