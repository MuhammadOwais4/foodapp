
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from '../../../Redux/reducer'; 
import Header from '../../common/Header';

const QuickBite = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.user.cart);

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
const BeveragesData=[
  {
    id: '1',
    name: 'Roti',
    description: 'Delicious Roti',
    price: '$10',
    discount: '$12',
    image: require('../../../images/Roti.png'),
  },
  {
    id: '2',
    name: 'Paratha',
    description: 'Delicious Paratha',
    price: '$10',
    discount: '$12',
    image: require('../../../images/Paratha.png'),
  },
  {
    id: '3',
    name: 'pepsi',
    description: 'pepsi',
    price: '$10',
    discount: '$12',
    image: require('../../../images/pepsi.png'),
  },
  {
    id: '4',
    name: '7up',
    description: '7up',
    price: '$10',
    discount: '$12',
    image: require('../../../images/7up.png'),
  },
]
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
      name: 'Chicken Manchurian',
      description: 'Classic Sweet and Sour Pork',
      price: '$14',
      discount: '$16',
      image: require('../../../images/Chicken-Manchurian.png'),
    },
    {
      id: '17',
      name: 'Prawn Tempura',
      description: 'Spicy Prawn Tempura',
      price: '$12',
      discount: '$15',
      image: require('../../../images/Prawn-Tempura.png'),
    },
    {
      id: '18',
      name: 'Sweet and-Sour Chicken',
      description: 'Sweet and Sour Chicken',
      price: '$15',
      discount: '$18',
      image: require('../../../images/Chicken-Corn-Soup.png'),
    },
    {
      id: '19',
      name: 'Szechuan Chicken',
      description: 'Sweet Szechuan Chicken',
      price: '$15',
      discount: '$18',
      image: require('../../../images/Szechuan-Chicken.png'),
    },
  ];
  
  const DessertData = [
    {
      id: '1',
      name: 'Gulab jaman',
      description: 'Sweet Gulab jaman',
      price: '$15',
      discount: '$18',
      image: require('../../../images/gulab-jaman.png'),
    },
    {
       id: '2',
      name: 'Ice cream-cup',
      description: 'Sweet Ice cream-cup',
      price: '$15',
      discount: '$18',
      image: require('../../../images/Ice-cream-cup.png'),
    },
    {
       id: '3',
      name: 'kheer',
      description: 'Sweet kheer',
      price: '$15',
      discount: '$18',
      image: require('../../../images/kheer.png'),
    },
  {
    id: '4',
    name: 'Matka kulfi',
    description: 'Sweet Matka kulfi',
    price: '$15',
    discount: '$18',
    image: require('../../../images/Matka-kulfi.png'),
  },

  ]
  const onAddToCart = (item) => {
    console.log('Added to cart:', item);
    dispatch(AddToCart(item));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onAddToCart(item)}>
      <View style={styles.itemView}>
        <Image source={item.image} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
          <View style={styles.itemPriceContainer}>
            <Text style={styles.itemPrice}>{item.price}</Text>
            <Text style={styles.itemDiscount}>{item.discount}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.addToCartBtn} onPress={() => onAddToCart(item)}>
          <Text style={styles.addToCartText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header
        icon={require('../../../images/cart.png')}
        onClickIcon={() => navigation.navigate('Cart')}
        cartItemCount={cart.length}
      />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>Fast Food</Text>
        <FlatList
          data={fastFoodData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.scrollViewContent}
        />
        <Text style={styles.sectionTitle}>Pakistani Food</Text>
        <FlatList
          data={pakistaniFoodData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.scrollViewContent}
        />
        <Text style={styles.sectionTitle}>Chinese Food</Text>
        <FlatList
          data={chinesefoodData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.scrollViewContent}
        />
         <Text style={styles.sectionTitle}>Dessert </Text>
        <FlatList
          data={DessertData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.scrollViewContent}
        />
         <Text style={styles.sectionTitle}>Beverages </Text>
        <FlatList
          data={BeveragesData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.scrollViewContent}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  scrollViewContent: {
    paddingTop: 20,
  },
  sectionTitle: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  itemContainer: {
    marginBottom: 16,
  },
  itemView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 4,
    padding: 12,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 12,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
  itemPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: 'green',
    marginTop: 4,
  },
  itemDiscount: {
    fontSize: 14,
    color: '#999',
    marginLeft: 8,
    textDecorationLine: 'line-through',
  },
  addToCartBtn: {
    backgroundColor: 'green',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartText: {
    color: '#E98B07',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default QuickBite;
