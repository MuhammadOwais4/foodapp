import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../common/Header';
import Beefburger from '../../../images/Beef_burgur.png';
import Chickenburger from '../../../images/Chicken_burger.png';

const Search = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation(); 

  useEffect(() => {
    const fetchedProducts = [
      { id: 1, name: 'Beef Burger', image: Beefburger, details: 'Delicious beef patty burger' },
      { id: 2, name: 'Chicken Burger', image: Chickenburger, details: 'Juicy chicken patty burger' },
      // Add more products as needed
    ];

    setProducts(fetchedProducts);
    setFilteredProducts(fetchedProducts);
  }, []);

  useEffect(() => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  const navigateToDetail = (item) => {
    navigation.navigate('QuickBite', { product: item });
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
      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
      />
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
