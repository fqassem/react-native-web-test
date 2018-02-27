import React from 'react';
import { Image } from 'react-native';

const GridItem = (props) => (
    <Image
        source={{
          uri: 'https://facebook.github.io/react/logo-og.png',
          cache: 'only-if-cached'
        }}
        style={{ width: 400, height: 400, marginLeft: 10 }}
      />
);
export default GridItem;