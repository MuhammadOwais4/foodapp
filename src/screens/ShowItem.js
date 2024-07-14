import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from '../Redux/reducer';
import Header from './common/Header';

const ShowItem = () => {
  const route = useRoute();
  const { product } = route.params;
  const dispatch = useDispatch();
  const cart = useSelector(state => state.user.cart);

  const handleAddToCart = () => {
    dispatch(AddToCart(product));
    alert('Item added to cart!');
  };

  return (
    <View style={styles.container}>
      <Header title={product.name} />
      <View style={styles.content}>
        <Image source={product.image} style={styles.productImage} />
        <View style={styles.infoContainer}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productOrigin}>{product.details}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>${product.price}11</Text>
            <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
              <Text style={styles.cartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
          {cart.length > 0 && (
              <></>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  infoContainer: {
    alignItems: 'flex-start',
    marginTop: 20,
    width: '100%',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  productOrigin: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  priceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  cartButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cartButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  cartIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  cartCount: {
    fontSize: 18,
    color: '#FFA500',
    marginLeft: 5,
  },
});

export default ShowItem;
