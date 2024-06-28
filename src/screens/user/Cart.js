import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { removeTocart } from '../../Redux/reducer'; 
import deleteIcon from '../../images/delete.png';

const Cart = () => {
  const navigation = useNavigation();
  const { height, width } = Dimensions.get('screen');
  const cart = useSelector((state) => state.user.cart);
  const dispatch = useDispatch();

  const handleOrderConfirmation = (item) => {
    Alert.alert(
      "Confirm Order",
      "Are you sure you want to confirm your order?",
      [
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => navigation.navigate('Home')
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

  const renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => handleOrderConfirmation(item)}>
      <View style={[styles.itemView, { borderWidth: 2 }]}>
        <Image source={item.image} style={styles.itemImage} />
        <View style={styles.nameView}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.descText}>{item.description}</Text>
          <View style={styles.priceView}>
            <Text style={styles.priceText}>{item.price}</Text>
            <Text style={styles.discountText}>{item.discount}</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.deleteIcon} onPress={() => handleDeleteItem(item.id)}>
          <Image source={deleteIcon} style={{ width: 24, height: 24, tintColor: 'red' }} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={{ height }}>
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
          contentContainerStyle={styles.scrollViewContent}
          style={{ height, width }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

export default Cart;
