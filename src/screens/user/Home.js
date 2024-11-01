import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, useColorScheme } from 'react-native';
import Main from './BottomNavigation/QuickBite';
import Search from './BottomNavigation/Search';
import OrderTracking from './BottomNavigation/OrderTracking';
import OrderHistory from '../OrderHistory';
import Profile from './BottomNavigation/Profile';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const scheme = useColorScheme();

  const renderTabContent = () => {
    switch (selectedTab) {
      case 0:
        return <Main />;
      case 1:
        return <Search />;
      case 2:
        return <OrderTracking />;
      case 3:
        return <OrderHistory />;
      case 4:
        return <Profile />;
      default:
        return <Main />;
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: scheme === 'dark' ? '#333333' : '#fff' }]}>
      {renderTabContent()}
      <View style={styles.bottomTabView}>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={
              selectedTab === 0
                ? require('../../images/home_fill.png')
                : require('../../images/home.png')
            }
            style={styles.bottomIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            source={
              selectedTab === 1
                ? require('../../images/search_fill.png')
                : require('../../images/search.png')
            }
            style={styles.bottomIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(2);
          }}>
          <Image
            source={
              selectedTab === 2
                ? require('../../images/biker-rider.png')
                : require('../../images/Save.png')
            }
            style={styles.bottomIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image
            source={
              selectedTab === 3
                ? require('../../images/orders_fill.png')
                : require('../../images/order.png')
            }
            style={styles.bottomIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(4);
          }}>
          <Image
            source={
              selectedTab === 4
                ? require('../../images/profile_fill.png')
                : require('../../images/profile.png')
            }
            style={styles.bottomIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomTabView: {
    flexDirection: 'row',
    height: 44,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    elevation: 5,
    position: 'absolute',
    bottom: 0,
  },
  bottomTab: {
    width: '20%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomIcon: {
    width: 24,
    height: 24,
  },
});

export default Home;
