import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, useColorScheme } from 'react-native';

const Header = ({ title, icon, onClickIcon, cartItemCount }) => {
  const colorScheme = useColorScheme(); // Detect current theme (light or dark)

  return (
    <View style={styles.header(colorScheme)}>
      <Text style={styles.title(colorScheme)}>{title}</Text>
      <TouchableOpacity onPress={onClickIcon} style={styles.iconContainer}>
        <Image source={require('./../../images/cart.png')} style={styles.icon} />
        {cartItemCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cartItemCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: (colorScheme) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: colorScheme === 'dark' ? '#333' : '#fff',
    elevation: 4,
  }),
  title: (colorScheme) => ({
    fontSize: 20,
    fontWeight: 'bold',
    color: colorScheme === 'dark' ? '#fff' : '#000',
  }),
  iconContainer: {
    position: 'relative',
  },
  icon: {
    width: 24,
    height: 24,
  },
  badge: {
    position: 'absolute',
    right: -10,
    top: -10,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Header;
