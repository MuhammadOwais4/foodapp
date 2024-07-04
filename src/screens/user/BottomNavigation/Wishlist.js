
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import React, { Profiler, useEffect, useState } from 'react';
import Header from '../../common/Header';

const Wishlist = () => {

  return (
    <View style={styles.container}>
      <Header title={'Wishlist'} />
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
  },
  nameText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginLeft: 20,
    marginTop: 5,
  },
  detailsText: {
    fontSize: 14,
    color: '#000',
    marginLeft: 20,
    marginTop: 5,
  },
  flatListContent: {
    paddingBottom: 20,
  },
});

export default Wishlist;
