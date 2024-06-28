import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Header from './common/Header';
import { AddTocart, removeTocart } from '../Redux/reducer';
import { useNavigation } from '@react-navigation/native'; 

const OrderHistory = () => {
  const cart = useSelector((state) => state.user.cart);
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(0);
  const [imageErrors, setImageErrors] = useState({});
  const navigation = useNavigation(); 

  useEffect(() => {
    updateTotalAmount();
  }, [cart]);

  const handleIncreaseQuantity = (item) => {
    dispatch(AddTocart(item));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(removeTocart(item.id));
  };

  const updateTotalAmount = () => {
    const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0);
    setTotalAmount(total);
  };

  const handleImageError = (id) => {
    setImageErrors((prevErrors) => ({ ...prevErrors, [id]: true }));
  };

  const renderItem = ({ item }) => (
    <View style={styles.orderItem}>
      <View style={styles.itemView}>
        <Image 
          source={imageErrors[item.id] ? require('../images/Beef_burgur.png') : { uri: item.imageUrl }} 
          style={styles.itemImage} 
          onError={() => handleImageError(item.id)} 
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.detailsText}>{item.description}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => handleDecreaseQuantity(item)}>
              <Text style={styles.quantityButton}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity onPress={() => handleIncreaseQuantity(item)}>
              <Text style={styles.quantityButton}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.priceText}>{item.price}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title={'Order History'} />
      {cart.length === 0 ? (
        <Text style={styles.emptyText}>No orders found.</Text>
      ) : (
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.flatListContent}
        />
      )}
      <View style={styles.totalAmountContainer}>
        <Text style={styles.totalAmountText}>Total Amount: ${totalAmount}</Text>
        <Button
          title="Proceed to Payment"
          onPress={() => navigation.navigate('Checkout', { totalAmount })}
        />
      </View>
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
  },
  detailsText: {
    fontSize: 14,
    color: '#000',
  },
  priceText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'green',
  },
  flatListContent: {
    paddingBottom: 20,
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantityButton: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 10,
  },
  totalAmountContainer: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  totalAmountText: {
    fontSize: 18,
    fontWeight: '700',
  },
});

export default OrderHistory;
