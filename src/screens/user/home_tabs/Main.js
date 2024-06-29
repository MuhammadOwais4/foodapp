import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../common/Header';
import { useDispatch, useSelector } from 'react-redux';
import { AddTocart } from '../../../Redux/reducer'; 

const Main = () => {
  const navigation = useNavigation();
  const { height, width } = Dimensions.get('screen');
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.user.cart);

  const data = [
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
      name: 'Veggie Burger',
      description: 'Healthy veggie burger',
      price: '$8',
      discount: '$10',
      image: require('../../../images/Veggie_burger.png'), 
    },
  ];

  const onAddToCart = (item) => {
    console.log('Added to cart:', item);
    dispatch(AddTocart(item));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
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
    </View>
  );

  return (
    <View style={styles.container}>
      <Header
        title={'Quick-Bite'}
        icon={require('../../../images/cart.png')} 
        onClickIcon={() => navigation.navigate('Cart')}
        cartItemCount={cart.length}
      />
            <Text style={styles.itemBeforeText}>Fast Food</Text>  
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.scrollViewContent}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  itemContainer: {
    marginBottom: 16,
  },
  itemBeforeText: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: '500',
    color: '#444',
    alignSelf: 'center',
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
    fontSize: 18,
    fontWeight: '600',
  },
  itemDescription: {
    fontSize: 14,
    marginTop: 4,
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
  },
  itemDiscount: {
    fontSize: 15,
    marginLeft: 8,
    color: '#999',
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

export default Main;
