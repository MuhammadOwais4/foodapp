import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { removeTocart } from '../../Redux/reducer';
import deleteIcon from '../../images/delete.png';
import Beef_burger from '../../images/Beef_burgur.png';
import Chicken_burger from '../../images/Chicken_burger.png';
import Veggie_burger from '../../images/Veggie_burger.png';

const Cart = () => {
  const navigation = useNavigation();
  const { height, width } = Dimensions.get('screen');
  const cart = useSelector((state) => state.user.cart);
  const dispatch = useDispatch();

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
          onPress: () => navigation.navigate('OrderStatus')
        }
      ]
    );
  };

  const handleDeleteItem = (itemId) => {
    dispatch(removeTocart(itemId));
  };

  const renderItem = ({ item }) => {
    let itemImage;
    switch (item.name) {
      case 'Veggie Burger':
        itemImage = Veggie_burger;
        break;
      case 'Chicken Burger':
        itemImage = Chicken_burger;
        break;
      default:
        itemImage = Beef_burger;
        break;
    }

    return (
      <View style={styles.itemView}>
        <Image source={itemImage} style={styles.itemImage} />
        <View style={styles.nameView}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.descText}>{item.description}</Text>
          <View style={styles.priceView}>
            <Text style={styles.priceText}>{item.price}</Text>
            {item.discount && <Text style={styles.discountText}>{item.discount}</Text>}
          </View>
        </View>
        <TouchableOpacity style={styles.deleteIcon} onPress={() => handleDeleteItem(item.id)}>
          <Image source={deleteIcon} style={styles.iconImage} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {cart.length > 0 ? (
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.scrollViewContent}
        />
      ) : (
        <View style={styles.emptyCartView}>
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
        </View>
      )}
      {cart.length > 0 && (
        <TouchableOpacity style={[styles.button, styles.confirmButton]} onPress={handleOrderConfirmation}>
          <Text style={styles.buttonText}>Confirm Order</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  itemView: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    elevation: 4,
    marginTop: 10,
    borderRadius: 10,
    height: 100,
    marginBottom: 10,
    alignItems: 'center',
    position: 'relative',
  },
  itemImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    margin: 5,
  },
  nameView: {
    flex: 1,
    margin: 10,
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 18,
    fontWeight: '700',
  },
  descText: {
    fontSize: 14,
    fontWeight: '600',
  },
  priceText: {
    fontSize: 18,
    color: 'green',
    fontWeight: '700',
  },
  discountText: {
    fontSize: 17,
    fontWeight: '600',
    textDecorationLine: 'line-through',
    marginLeft: 5,
  },
  deleteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  iconImage: {
    width: 24,
    height: 24,
    tintColor: 'red',
  },
  emptyCartView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#777',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 15,
    marginHorizontal: 20,
  },
  confirmButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Cart;
