import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { selectAddress, payNow } from '../../../Redux/reducer'; 

const Checkout = ({ navigation, selectedAddress, selectAddress, payNow }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemView}>
        <Image
          source={{ uri: 'https://via.placeholder.com/90' }}
          style={styles.itemImage}
        />
        <View style={styles.nameView}>
          <Text style={styles.nameText}>Item Name</Text>
          <Text style={styles.descText}>Item Description</Text>
          <View style={styles.priceView}>
            <Text style={styles.priceText}>$10</Text>
            <Text style={styles.discountText}>$120</Text>
          </View>
        </View>
        <Text style={styles.nameText}>1</Text>
      </View>

      <View style={styles.totalView}>
        <Text style={styles.nameText}>Total</Text>
        <Text style={styles.nameText}>$100</Text>
      </View>

      <View style={styles.totalView}>
        <Text style={styles.nameText}>Selected Address</Text>
        <Text
          style={styles.editAddress}
          onPress={() => {
            navigation.navigate('Address');
          }}
        >
          Change Address
        </Text>
      </View>

      <Text style={styles.nameText}>{selectedAddress}</Text>

      <TouchableOpacity
        disabled={selectedAddress === 'No Selected Address'}
        style={[
          styles.checkoutBtn,
          {
            backgroundColor:
              selectedAddress === 'No Selected Address' ? '#DADADA' : 'green',
          },
        ]}
        onPress={() => {
          payNow(); 
          navigation.navigate('Payment');
        }} 
      >
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>
          Pay Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  selectedAddress: state.user.selectedAddress, 
});

const mapDispatchToProps = {
  selectAddress,
  payNow,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 10,
  },
  itemImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 10,
  },
  nameView: {
    flex: 1,
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  nameText: {
    fontSize: 18,
    fontWeight: '700',
  },
  descText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b6b6b',
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
    color: '#6b6b6b',
  },
  totalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#8e8e8e',
    marginTop: 20,
    height: 50,
  },
  editAddress: {
    color: '#2F62D1',
    fontSize: 16,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  checkoutBtn: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});
