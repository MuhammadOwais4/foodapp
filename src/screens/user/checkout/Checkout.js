import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Beef_burger from '../../../images/Beef_burgur.png';
import Chicken_burger from '../../../images/Chicken_burger.png';
import Veggie_burger from '../../../images/Veggie_burger.png';
import AcharGosht from '../../../images/Achar-Gosht.png';
import Daalchawal from '../../../images/Daalchawal.png';
import editIcon from '../../../images/edit.png'; 

const Checkout = ({ navigation }) => {
  const cart = useSelector((state) => state.user.cart);
  const address = useSelector((state) => state.user.address);

  const getImageSource = (itemName) => {
    switch (itemName) {
      case 'Beef Burger':
        return Beef_burger;
      case 'Chicken Burger':
        return Chicken_burger;
      case 'Veggie Burger':
        return Veggie_burger;
      case 'Achar Gosht':
        return AcharGosht;
      case 'Daal-chawal':
        return Daalchawal;
      default:
        return null;
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemView}>
      <Image source={getImageSource(item.name)} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContainer}
      />
      
      <View style={styles.addressView}>
        <Text style={styles.addressText}>Delivery Address:</Text>
        <Text>{`${address.street}, ${address.city}, ${address.pincode}`}</Text>
        <Text>Contact: {address.contact}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Address')}
        >
          <Image source={editIcon} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Edit Address</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { marginTop: 10, backgroundColor: '#FBBF24' }]}
          onPress={() => navigation.navigate('Payment')}
        >
          <Text style={styles.buttonText}>Proceed to Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  flatListContainer: {
    paddingBottom: 16,
  },
  itemView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 12,
    padding: 12,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  itemQuantity: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  addressView: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 10,
  },
  addressText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#1C1C1E',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10, 
  },
  buttonIcon: {
    width: 20, 
    height: 20,
    tintColor: '#fff',
  },
});

export default Checkout;
