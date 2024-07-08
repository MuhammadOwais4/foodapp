import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const PaymentSuccess = () => {
  const navigation = useNavigation();
  const address = useSelector((state) => state.user.address);
  const cart = useSelector((state) => state.user.cart);

  const handleTrackOrder = () => {
    navigation.navigate('OrderTracking');
  };

  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      const price = parseFloat(item.price.replace('$', ''));
      total += price * item.quantity;
    });
    return total.toFixed(2);
  };

  return (
    <View style={styles.container}>
     <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require('../images/back_icon.png')} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.title}>Order Summary</Text>
      <View style={styles.addressContainer}>
        <Text style={styles.addressTitle}>Delivery Address</Text>
        <Text style={styles.addressText}>Street: {address.street}</Text>
        <Text style={styles.addressText}>City: {address.city}</Text>
        <Text style={styles.addressText}>Contact: {address.contact}</Text>
      </View>

      <View style={styles.itemsContainer}>
        <Text style={styles.itemsTitle}>Ordered Items</Text>
        {cart.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price} x {item.quantity}</Text>
          </View>
        ))}
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Amount: ${calculateTotalAmount()}</Text>
      </View>

      <TouchableOpacity style={styles.trackButton} onPress={handleTrackOrder}>
        <Text style={styles.trackButtonText}>Track Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  addressContainer: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addressText: {
    fontSize: 16,
    marginBottom: 8,
  },
  itemsContainer: {
    marginBottom: 20,
  },
  itemsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    color: '#777',
  },
  totalContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  trackButton: {
    backgroundColor: 'green',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignSelf: 'center',
  },
  trackButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  backButton: {
    width: 25, 
    height: 25, 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  backIcon: {
    width: 35,
    height: 35,
  },
});

export default PaymentSuccess;
