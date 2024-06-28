import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeTocart } from '../../../Redux/reducer';
import Header from '../../common/Header';
import { useNavigation } from '@react-navigation/native';

import deleteIcon from '../../../images/delete.png';

const OrderStatus = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.user.cart);

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeTocart(itemId));
  };

  const handleOrderConfirmation = () => {
    Alert.alert(
      "Confirm Order",
      "Are you sure you want to confirm your order?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Confirm",
          onPress: () => {
            navigation.navigate('OrderHistory');
          }
        }
      ]
    );
  };

  const handleCancelOrder = () => {
    Alert.alert(
      "Cancel Order",
      "Are you sure you want to cancel your order?",
      [
        {
          text: "No",
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => {
            navigation.navigate('Cart'); 
          }
        }
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.orderItem}>
      <View style={styles.itemView}>
        <Image source={item.image} style={styles.itemImage} />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.detailsText}>{item.description}</Text>
          <Text style={styles.priceText}>{item.price}</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => handleRemoveFromCart(item.id)}>
            <Image source={deleteIcon} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title={'Orders status'} />
      
      {cart.length === 0 && (
        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancelOrder}>
          <Text style={styles.buttonText}>Cancel Order</Text>
        </TouchableOpacity>
      )}

      {cart.length > 0 && (
        <React.Fragment>
          <FlatList
            data={cart}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.flatListContent}
          />
          
          <TouchableOpacity style={[styles.button, styles.confirmButton]} onPress={handleOrderConfirmation}>
            <Text style={styles.buttonText}>Confirm Order</Text>
          </TouchableOpacity>
        </React.Fragment>
      )}
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
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 15,
    marginHorizontal: 20,
  },
  cancelButton: {
    backgroundColor: 'red',
  },
  confirmButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 50,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default OrderStatus;
