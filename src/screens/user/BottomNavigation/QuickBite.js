import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList, useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from '../../../Redux/reducer'; 
import Header from '../../common/Header';

const QuickBite = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.user.cart);
  const scheme = useColorScheme();

  const fastFoodData = [
    {
      id: '1',
      name: 'Beef Burger',
      description: 'Delicious beef burger',
      price: '$10',
      discount: '$12',
      image: require('../../../images/Beef_burgur.png'), 
    },
    {
      id: '2',
      name: 'Chicken Burger',
      description: 'Spicy chicken burger',
      price: '$12',
      discount: '$15',
      image: require('../../../images/Chicken_burger.png'), 
    },
    {
      id: '3',
      name: 'Broast cheast',
      description: 'Healthy Broast cheast',
      price: '$8',
      discount: '$10',
      image: require('../../../images/Broast-cheast.png'), 
    },
    {
      id: '4',
      name: 'Chicken nuggets',
      description: 'Healthy Chicken nuggets',
      price: '$8',
      discount: '$10',
      image: require('../../../images/Chicken-nuggets.png'), 
    },
    {
      id: '5',
      name: 'chicken pizza',
      description: 'Healthy Chicken Pizza',
      price: '$8',
      discount: '$10',
      image: require('../../../images/chicken-pizza.png'), 
    },
    {
      id: '6',
      name: 'Club sandwich',
      description: 'Healthy Club sandwich',
      price: '$8',
      discount: '$10',
      image: require('../../../images/Club-sandwich.png'), 
    },
    {
      id: '7',
      name: 'Friend Fries',
      description: 'Healthy Friend Fries',
      price: '$8',
      discount: '$10',
      image: require('../../../images/Friend-fries.png'), 
    },
    {
      id: '8',
      name: 'Zinger burgur',
      description: 'Healthy Zinger burgur',
      price: '$8',
      discount: '$10',
      image: require('../../../images/Zinger-burgur.png'), 
    },
  ];

  const pakistaniFoodData = [
    {
      id: '1',
      name: 'Achar Gosht',
      description: 'Delicious Achar Gosht',
      price: '$10',
      discount: '$12',
      image: require('../../../images/Achar-Gosht.png'),
    },
    {
      id: '2',
      name: 'Daal chawal',
      description: 'Spicy Daal chawal',
      price: '$12',
      discount: '$15',
      image: require('../../../images/Daal-chawal.png'),
    },
    {
      id: '3',
      name: 'Afghani pulao',
      description: 'Delicious Afghani pulao',
      price: '$10',
      discount: '$12',
      image: require('../../../images/Afghani-pulao.png'),
    },
    {
      id: '4',
      name: 'Bhuna Gosht',
      description: 'Spicy Bhuna Gosht',
      price: '$12',
      discount: '$15',
      image: require('../../../images/Bhuna-Gosht.png'),
    },
    {
      id: '5',
      name: 'Chapli kebab',
      description: 'Delicious Chapli kebab',
      price: '$10',
      discount: '$12',
      image: require('../../../images/Chapli-kebab.png'),
    },
    {
      id: '6',
      name: 'haleem',
      description: 'Spicy haleem',
      price: '$12',
      discount: '$15',
      image: require('../../../images/haleem.png'),
    },
    {
      id: '7',
      name: 'karachi biryani',
      description: 'Delicious karachi biryani',
      price: '$10',
      discount: '$12',
      image: require('../../../images/karachi-biryani.png'),
    },
    {
      id: '8',
      name: 'karhai pakora',
      description: 'Spicy karhai pakora',
      price: '$12',
      discount: '$15',
      image: require('../../../images/karhai-pakora.png'),
    },
    {
      id: '9',
      name: 'keema',
      description: 'Delicious keema',
      price: '$10',
      discount: '$12',
      image: require('../../../images/Keema.png'),
    },
    {
      id: '10',
      name: 'Samosa',
      description: 'Spicy Samosa',
      price: '$12',
      discount: '$15',
      image: require('../../../images/Samosa.png'),
    },
    {
      id: '11',
      name: 'Seekh kabab',
      description: 'Delicious Seekh kabab',
      price: '$10',
      discount: '$12',
      image: require('../../../images/Seekh-kabab.png'),
    },
    {
      id: '12',
      name: 'shahi nihari',
      description: 'Spicy shahi nihari',
      price: '$12',
      discount: '$15',
      image: require('../../../images/shahi-nihari.png'),
    },
  ];

  const chinesefoodData = [
    {
      id: '1',
      name: 'Beef Chili Dry',
      description: 'Spicy Beef-Chili-Dry',
      price: '$12',
      discount: '$15',
      image: require('../../../images/Beef-Chili-Dry.png'),
    },
    {
      id: '2',
      name: 'Chicken Corn Soup',
      description: 'Chicken-Corn-Soup',
      price: '$15',
      discount: '$18',
      image: require('../../../images/Chicken-Corn-Soup.png'),
    },
    {
      id: '3',
      name: 'Chicken Manchurian',
      description: 'Classic Sweet and Sour Pork',
      price: '$14',
      discount: '$16',
      image: require('../../../images/Chicken-Manchurian.png'),
    },
    {
      id: '4',
      name: 'Chicken Schezwan',
      description: 'Spicy Chicken Schezwan',
      price: '$12',
      discount: '$15',
      image: require('../../../images/Chicken-Schezwan.png'),
    },
    {
      id: '5',
      name: 'Chicken Spring Rolls',
      description: 'Chicken Spring Rolls',
      price: '$15',
      discount: '$18',
      image: require('../../../images/Chicken-Spring-Rolls.png'),
    },
    {
      id: '6',
      name: 'Chow Mein',
      description: 'Classic Chow Mein',
      price: '$14',
      discount: '$16',
      image: require('../../../images/Chow-Mein.png'),
    },
    {
      id: '7',
      name: 'Crispy-Beef',
      description: 'Spicy Crispy-Beef',
      price: '$12',
      discount: '$15',
      image: require('../../../images/Crispy-Beef.png'),
    },
    {
      id: '8',
      name: 'Dumplings',
      description: 'Dumplings',
      price: '$15',
      discount: '$18',
      image: require('../../../images/Dumplings.png'),
    },
    {
      id: '9',
      name: 'Fried rice',
      description: 'Classic Sweet Fried rice',
      price: '$14',
      discount: '$16',
      image: require('../../../images/Fried-rice.png'),
    },
    {
      id: '10',
      name: 'Garlic-Prawns',
      description: 'Garlic Prawns',
      price: '$12',
      discount: '$15',
      image: require('../../../images/Garlic-Prawns.png'),
    },
    {
      id: '11',
      name: 'Hakka Noodles',
      description: 'Hakka Noodles',
      price: '$15',
      discount: '$18',
      image: require('../../../images/Hakka-Noodles.png'),
    },
    {
      id: '13',
      name: 'Honey Chicken',
      description: 'Classic Sweet Honey Chicken',
      price: '$14',
      discount: '$16',
      image: require('../../../images/Honey-Chicken.png'),
    },
    {
      id: '14',
      name: 'Hot and Sour Soup',
      description: 'Spicy Hot and Sour Soup',
      price: '$12',
      discount: '$15',
      image: require('../../../images/Hot-and-Sour-Soup.png'),
    },
    {
      id: '15',
      name: 'MongolianBeef',
      description: 'Mongolian-Beef',
      price: '$15',
      discount: '$18',
      image: require('../../../images/Mongolian-Beef.png'),
    },
    {
      id: '16',
      name: 'Orange Chicken',
      description: 'Classic Sweet and Sour Orange Chicken',
      price: '$14',
      discount: '$16',
      image: require('../../../images/Orange-Chicken.png'),
    },
    {
      id: '17',
      name: 'Pan Fried Noodles',
      description: 'Pan Fried Noodles',
      price: '$12',
      discount: '$15',
      image: require('../../../images/Pan-Fried-Noodles.png'),
    },
    {
      id: '18',
      name: 'Pepper Steak',
      description: 'Pepper Steak',
      price: '$15',
      discount: '$18',
      image: require('../../../images/Pepper-Steak.png'),
    },
    {
      id: '19',
      name: 'Pot stickers',
      description: 'Classic Sweet Pot stickers',
      price: '$14',
      discount: '$16',
      image: require('../../../images/Pot-stickers.png'),
    },
    {
      id: '20',
      name: 'Shrimp Lo Mein',
      description: 'Shrimp Lo Mein',
      price: '$12',
      discount: '$15',
      image: require('../../../images/Shrimp-Lo-Mein.png'),
    },
    {
      id: '21',
      name: 'Szechuan Prawns',
      description: 'Szechuan Prawns',
      price: '$15',
      discount: '$18',
      image: require('../../../images/Szechuan-Prawns.png'),
    },
    {
      id: '22',
      name: 'Sweet-and-Sour-Chicken',
      description: 'Classic Sweet Sweet-and-Sour-Chicken',
      price: '$14',
      discount: '$16',
      image: require('../../../images/Sweet-and-Sour-Chicken.png'),
    },
    {
      id: '23',
      name: 'Wonton Soup',
      description: 'Spicy Wonton Soup',
      price: '$12',
      discount: '$15',
      image: require('../../../images/Wonton-Soup.png'),
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('Details', { item })}
    >
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <Text style={styles.itemDiscount}>{item.discount}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={{ ...styles.container, backgroundColor: scheme === 'dark' ? '#333333' : '#ffffff' }}>
      <Header title="All food categories" />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Fast Food</Text>
        <FlatList
          data={fastFoodData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pakistani food</Text>
        <FlatList
          data={pakistaniFoodData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Chinese food</Text>
        <FlatList
          data={chinesefoodData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  listContainer: {
    paddingBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginRight: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  itemDetails: {
    flex: 1,
    padding: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 2,
  },
  itemDiscount: {
    fontSize: 14,
    color: '#999999',
  },
});

export default QuickBite;
