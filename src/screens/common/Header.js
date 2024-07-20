import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, useColorScheme } from 'react-native';

const Header = ({ title, icon, onClickIcon, cartItemCount }) => {
  const colorScheme = useColorScheme(); // Detect the current color scheme

  // Determine styles based on the current color scheme
  const isDarkMode = colorScheme === 'dark';
  
  return (
    <View style={[styles.header, isDarkMode && styles.headerDark]}>
      <Text style={[styles.title, isDarkMode && styles.titleDark]}>{title}</Text>
      <TouchableOpacity onPress={onClickIcon} style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} />
        {cartItemCount > 0 && (
          <View style={[styles.badge, isDarkMode && styles.badgeDark]}>
            <Text style={[styles.badgeText, isDarkMode && styles.badgeTextDark]}>{cartItemCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff', // Light mode background
    elevation: 4,
  },
  headerDark: {
    backgroundColor: '#000', // Dark mode background
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', // Light mode text color
  },
  titleDark: {
    color: '#fff', // Dark mode text color
  },
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
    backgroundColor: 'red', // Badge color in both modes
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeDark: {
    backgroundColor: 'darkred', // Dark mode badge color
  },
  badgeText: {
    color: '#fff', // Badge text color in both modes
    fontSize: 12,
    fontWeight: 'bold',
  },
  badgeTextDark: {
    color: '#fff', // Dark mode badge text color
  },
});

export default Header;
