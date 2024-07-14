import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../common/Header';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';

// Import images
import Beefburger from '../../../images/Beef_burgur.png';
import Chickenburger from '../../../images/Chicken_burger.png';
import Broastcheast from '../../../images/Broast-cheast.png';
import Chickennuggets from '../../../images/Chicken-nuggets.png';
import chickenpizza from '../../../images/chicken-pizza.png';
import Clubsandwich from '../../../images/Club-sandwich.png';
import Friendfries from '../../../images/Friend-fries.png';
import Zingerburgur from '../../../images/Zinger-burgur.png';
import Roti from '../../../images/Roti.png';
import Paratha from '../../../images/Paratha.png';
import pesi from '../../../images/pepsi.png';
import up from '../../../images/7up.png';
import AcharGosht from '../../../images/Achar-Gosht.png';
import Daalchawal from '../../../images/Daal-chawal.png';
import Afghanipulao from '../../../images/Afghani-pulao.png';
import BhunaGosht from '../../../images/Bhuna-Gosht.png';
import Chaplikebab from '../../../images/Chapli-kebab.png';
import haleem from '../../../images/haleem.png';
import karachibiryani from '../../../images/karachi-biryani.png';
import karhaipakora from '../../../images/karhai-pakora.png';
import Keema from '../../../images/Keema.png';
import Samosa from '../../../images/Samosa.png';
import Seekhkabab from '../../../images/Seekh-kabab.png';
import shahinihari from '../../../images/shahi-nihari.png';
import BeefChiliDry from '../../../images/Beef-Chili-Dry.png';
import ChickenCornSoup from '../../../images/Chicken-Corn-Soup.png';
import ChickenSchezwan from '../../../images/Chicken-Schezwan.png';
import ChickenSpringRolls from '../../../images/Chicken-Spring-Rolls.png';
import ChowMein from '../../../images/Chow-Mein.png';
import CrispyBeef from '../../../images/Crispy-Beef.png';
import Dumplings from '../../../images/Dumplings.png';
import Friedrice from '../../../images/Fried-rice.png';
import GarlicPrawns from '../../../images/Garlic-Prawns.png';
import HakkaNoodles from '../../../images/Hakka-Noodles.png';
import HoneyChicken from '../../../images/Honey-Chicken.png';
import HotandSourSoup from '../../../images/Hot-and-Sour-Soup.png';
import ChickenManchurian from '../../../images/Chicken-Manchurian.png';
import PrawnTempura from '../../../images/Prawn-Tempura.png';
import SzechuanChicken from '../../../images/Szechuan-Chicken.png';
import Gulabjaman from '../../../images/gulab-jaman.png';
import Icecream from '../../../images/Ice-cream-cup.png';
import kheer from '../../../images/kheer.png';
import Matkakulfi from '../../../images/Matka-kulfi.png';

const Search = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fetchedProducts = [
      { id: 1, name: 'Beef Burger', image: Beefburger, details: 'Delicious beef patty burger' },
      { id: 2, name: 'Chicken Burger', image: Chickenburger, details: 'Juicy chicken patty burger' },
      { id: 3, name: 'Broastcheast', image: Broastcheast, details: 'Juicy Broastcheast' },
      { id: 4, name: 'Chickennuggets', image: Chickennuggets, details: 'Juicy chicken patty burger' },
      { id: 5, name: 'chickenpizza', image: chickenpizza, details: 'Juicy chicken patty burger' },
      { id: 6, name: 'Clubsandwich', image: Clubsandwich, details: 'Juicy chicken patty burger' },
      { id: 7, name: 'Friendfries', image: Friendfries, details: 'Juicy chicken patty burger' },
      { id: 8, name: 'Zingerburgur', image: Zingerburgur, details: 'Juicy chicken patty burger' },
      { id: 9, name: 'Roti', image: Roti, details: 'Juicy chicken patty burger' },
      { id: 10, name: 'Paratha', image: Paratha, details: 'Juicy chicken patty burger' },
      { id: 11, name: 'pesi', image: pesi, details: 'Juicy chicken patty burger' },
      { id: 12, name: '7up', image: up, details: 'Juicy chicken patty burger' },
      { id: 13, name: 'AcharGosht', image: AcharGosht, details: 'Juicy chicken patty burger' },
      { id: 14, name: 'Daalchawal', image: Daalchawal, details: 'Juicy chicken patty burger' },
      { id: 15, name: 'Afghanipulao', image: Afghanipulao, details: 'Juicy chicken patty burger' },
      { id: 16, name: 'BhunaGosht', image: BhunaGosht, details: 'Juicy chicken patty burger' },
      { id: 17, name: 'haleem', image: haleem, details: 'Juicy chicken patty burger' },
      { id: 18, name: 'karachibiryani', image: karachibiryani, details: 'Juicy chicken patty burger' },
      { id: 19, name: 'karhaipakora', image: karhaipakora, details: 'Juicy chicken patty burger' },
      { id: 20, name: 'Keema', image: Keema, details: 'Juicy chicken patty burger' },
      { id: 21, name: 'Samosa', image: Samosa, details: 'Juicy chicken patty burger' },
      { id: 22, name: 'Seekhkabab', image: Seekhkabab, details: 'Juicy chicken patty burger' },
      { id: 23, name: 'shahinihari', image: shahinihari, details: 'Juicy chicken patty burger' },
      { id: 24, name: 'BeefChiliDry', image: BeefChiliDry, details: 'Juicy chicken patty burger' },
      { id: 25, name: 'ChickenCornSoup', image: ChickenCornSoup, details: 'Juicy chicken patty burger' },
      { id: 26, name: 'ChickenSchezwan', image: ChickenSchezwan, details: 'Juicy chicken patty burger' },
      { id: 27, name: 'ChickenSpringRolls', image: ChickenSpringRolls, details: 'Juicy chicken patty burger' },
      { id: 28, name: 'Chaplikebab', image: Chaplikebab, details: 'Juicy chicken patty burger' },
      { id: 29, name: 'ChowMein', image: ChowMein, details: 'Juicy chicken patty burger' },
      { id: 30, name: 'CrispyBeef', image: CrispyBeef, details: 'Juicy chicken patty burger' },
      { id: 31, name: 'Dumplings', image: Dumplings, details: 'Juicy chicken patty burger' },
      { id: 32, name: 'Friedrice', image: Friedrice, details: 'Juicy chicken patty burger' },
      { id: 33, name: 'GarlicPrawns', image: GarlicPrawns, details: 'Juicy chicken patty burger' },
      { id: 34, name: 'HakkaNoodles', image: HakkaNoodles, details: 'Juicy chicken patty burger' },
      { id: 35, name: 'HoneyChicken', image: HoneyChicken, details: 'Juicy chicken patty burger' },
      { id: 36, name: 'HotandSourSoup', image: HotandSourSoup, details: 'Juicy chicken patty burger' },
      { id: 37, name: 'ChickenManchurian', image: ChickenManchurian, details: 'Juicy chicken patty burger' },
      { id: 38, name: 'PrawnTempura', image: PrawnTempura, details: 'Juicy chicken patty burger' },
      { id: 39, name: 'SzechuanChicken', image: SzechuanChicken, details: 'Juicy chicken patty burger' },
      { id: 40, name: 'Gulabjaman', image: Gulabjaman, details: 'Juicy chicken patty burger' },
      { id: 41, name: 'Icecream', image: Icecream, details: 'Juicy chicken patty burger' },
      { id: 42, name: 'kheer', image: kheer, details: 'Juicy chicken patty burger' },
      { id: 43, name: 'Matkakulfi', image: Matkakulfi, details: 'Juicy chicken patty burger' },
    ];

    setProducts(fetchedProducts);
    setFilteredProducts(fetchedProducts);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [searchQuery, products]);

  const navigateToDetail = (item) => {
    navigation.navigate('Showitem', { product: item });
  };

  const renderProductItem = ({ item }) => (
    <TouchableOpacity style={styles.orderItem} onPress={() => navigateToDetail(item)}>
      <View style={styles.itemView}>
        <Image source={item.image} style={styles.itemImage} />
        <View>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.detailsText}>{item.details}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title={'Search'} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search products..."
        onChangeText={text => setSearchQuery(text)}
        value={searchQuery}
      />
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <FlatList
          data={filteredProducts}
          renderItem={renderProductItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.flatListContent}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  orderItem: {
    width: '90%',
    borderRadius: 10,
    elevation: 5,
    alignSelf: 'center',
    backgroundColor: '#fff',
    marginTop: 20,
    marginBottom: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  itemView: {
    margin: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginLeft: 20,
    marginTop: 5,
  },
  detailsText: {
    fontSize: 14,
    color: '#000',
    marginLeft: 20,
    marginTop: 5,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    marginHorizontal: 20,
  },
});

export default Search;
