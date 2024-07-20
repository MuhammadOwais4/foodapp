import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput, Image, useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Payment = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme(); // Detect current theme (light or dark)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const cart = useSelector(state => state.user.cart);

  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach(item => {
      const price = parseFloat(item.price.replace('$', ''));
      total += price * item.quantity;
    });
    return total.toFixed(2);
  };

  const handlePayment = () => {
    console.log('Payment button pressed');
    navigation.navigate('PaymentSuccess');
  };

  return (
    <View style={styles.container(colorScheme)}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require('../images/back_icon.png')} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={[styles.header, styles.textWhite]}>Payment</Text>

      <View style={styles.cardContainer(colorScheme)}>
        <Image source={require('../images/card.png')} style={styles.cardImage} />
      </View>

      <Text style={[styles.sectionHeader, styles.textWhite]}>Choose Payment Method</Text>
      <View style={styles.paymentMethods}>
        <TouchableOpacity
          style={[styles.paymentMethodButton(colorScheme), selectedPaymentMethod === 'mastercard' && styles.selectedMethod]}
          onPress={() => setSelectedPaymentMethod('mastercard')}
        >
          <Image source={require('../images/mastercard.png')} style={styles.paymentMethodIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.paymentMethodButton(colorScheme), selectedPaymentMethod === 'jazzcash' && styles.selectedMethod]}
          onPress={() => setSelectedPaymentMethod('jazzcash')}
        >
          <Image source={require('../images/jazzcash.png')} style={styles.paymentMethodIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.paymentMethodButton(colorScheme), selectedPaymentMethod === 'paypal' && styles.selectedMethod]}
          onPress={() => setSelectedPaymentMethod('paypal')}
        >
          <Image source={require('../images/Paypal.png')} style={styles.paymentMethodIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.paymentMethodButton(colorScheme), selectedPaymentMethod === 'easyPasia' && styles.selectedMethod]}
          onPress={() => setSelectedPaymentMethod('easyPasia')}
        >
          <Image source={require('../images/easyPasia.png')} style={styles.paymentMethodIcon} />
        </TouchableOpacity>
      </View>

      {selectedPaymentMethod && (
        <Text style={[styles.selectedPaymentMethodText, styles.textWhite]}>
          Selected Payment Method: {selectedPaymentMethod.charAt(0).toUpperCase() + selectedPaymentMethod.slice(1)}
        </Text>
      )}

      <Text style={[styles.sectionHeader, styles.textWhite]}>Promo Code</Text>
      <View style={styles.promoCodeContainer(colorScheme)}>
        <TextInput
          style={styles.promoCodeInput(colorScheme)}
          placeholder="Promo code"
          placeholderTextColor={colorScheme === 'dark' ? '#888' : '#888'}
        />
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.totalPaymentContainer}>
        <Text style={[styles.totalPaymentText, styles.textWhite]}>Total Payment</Text>
        <Text style={styles.totalAmount}>${calculateTotalAmount()}</Text>
      </View>

      <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
        <Text style={styles.paymentButtonText}>Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: (colorScheme) => ({
    flex: 1,
    padding: 16,
    backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
  }),
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textWhite: {
    color: '#FFF',
  },
  cardContainer: (colorScheme) => ({
    backgroundColor: colorScheme === 'dark' ? '#1c1c1e' : '#f8f8f8',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  }),
  cardImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paymentMethods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  paymentMethodButton: (colorScheme) => ({
    backgroundColor: colorScheme === 'dark' ? '#2c2c2e' : '#e0e0e0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  selectedMethod: {
    borderColor: '#0a84ff',
    borderWidth: 2,
  },
  paymentMethodIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  selectedPaymentMethodText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  promoCodeContainer: (colorScheme) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colorScheme === 'dark' ? '#1c1c1e' : '#f8f8f8',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  }),
  promoCodeInput: (colorScheme) => ({
    flex: 1,
    color: colorScheme === 'dark' ? '#FFF' : '#000',
  }),
  applyButton: {
    backgroundColor: '#0a84ff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  totalPaymentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  totalPaymentText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0a84ff',
  },
  paymentButton: {
    backgroundColor: '#0a84ff',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  paymentButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default Payment;
