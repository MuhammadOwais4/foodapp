import React from 'react';
import { View, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width } = Dimensions.get('window');

const MyCarousel = ({ data, renderItem }) => {
  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={width}
      itemWidth={width - 60} 
    />
  );
};

export default MyCarousel;
