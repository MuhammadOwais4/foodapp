import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeTocart, clearCart } from '../../Redux/reducer';
import deleteIcon from '../../images/delete.png';
import { useNavigation } from '@react-navigation/native';
import Beef_burger from '../../images/Beef_burgur.png';
import Chicken_burger from '../../images/Chicken_burger.png';
import Veggie_burger from '../../images/Veggie_burger.png';
import AcharGosht from '../../images/Achar-Gosht.png';
import Daalchawal from '../../images/Daalchawal.png';

const Cart = () => {
  const navigation = useNavigation();
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

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch({ type: 'increaseQuantity', payload: itemId });
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch({ type: 'decreaseQuantity', payload: itemId });
  };

  const renderItem = ({ item }) => {
    let imageUrl = '';
    if (item.name === 'Beef Burger') {
      imageUrl = Beef_burger;
    } else if (item.name === 'Chicken Burger') {
      imageUrl = Chicken_burger;
    } else if (item.name === 'Veggie Burger') {
      imageUrl = Veggie_burger;
    } else if (item.name === 'Achar Gosht') {
      imageUrl = AcharGosht;
    } else if (item.name === 'Daal-chawal') {
      imageUrl = Daalchawal;
    }

    return (
      <View style={styles.itemView}>
        <Image source={imageUrl} style={styles.itemImage} />
        <View style={styles.nameView}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.descText}>{item.description}</Text>
          <View style={styles.priceView}>
            <Text style={styles.priceText}>{item.price}</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => handleDecreaseQuantity(item.id)} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => handleIncreaseQuantity(item.id)} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
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
        <>
          <FlatList
            data={cart}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.scrollViewContent}
          />
          <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={handleClearCart}>
            <Text style={styles.buttonText}>Clear Cart</Text>
          </TouchableOpacity>
        </>
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
    height: 120, // Adjusted height for better display
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
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    color: '#555',
  },
  quantityText: {
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
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
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: 'green',
  },
  clearButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Cart;
