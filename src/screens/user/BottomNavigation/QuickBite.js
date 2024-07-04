import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../common/Header';
import { useDispatch, useSelector } from 'react-redux';
import { AddTocart } from '../../../Redux/reducer'; 
import Home from '../Home';


const QuickBite = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.user.cart);

  const fastFoodData = [
    {
      id: 'fastFood-1',
      name: 'Beef Burger',
      description: 'Delicious beef burger',
      price: '$10',
      discount: '$12',
      image: require('../../../images/Beef_burgur.png'), 
    },
    {
      id: 'fastFood-2',
      name: 'Chicken Burger',
      description: 'Spicy chicken burger',
      price: '$12',
      discount: '$15',
      image: require('../../../images/Chicken_burger.png'), 
    },
    {
      id: 'fastFood-3',
      name: 'Veggie Burger',
      description: 'Healthy veggie burger',
      price: '$8',
      discount: '$10',
      image: require('../../../images/Veggie_burger.png'), 
    },
  ];

  const pakistaniFoodData = [
    {
      id: 'pakistaniFood-1',
      name: 'Achar Gosht',
      description: 'Delicious Achar Gosht',
      price: '$10',
      discount: '$12',
      image: require('../../../images/Achar-Gosht.png'),
    },
    {
      id: 'pakistaniFood-2',
      name: 'Daal chawal',
      description: 'Spicy Daal chawal',
      price: '$12',
      discount: '$15',
      image: require('../../../images/Daalchawal.png'),
    },
  ];

  const onAddToCart = (item) => {
    console.log('Added to cart:', item);
    dispatch(AddTocart(item)); 
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
        <View style={styles.addToCartBtn}>
          <Text style={styles.addToCartText}>Add To Cart</Text>
        </View>
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
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default QuickBite;
