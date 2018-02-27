import React from 'react';
import { View, ScrollView } from 'react-native';

import GridItem from './GridItem';
const gridItems = [
  {
    title: 'Item 1'
  },
  {
    title: 'Item 2'
  },
  {
    title: 'Item 3'
  },
  {
    title: 'Item 4'
  },
  {
    title: 'Item 5'
  }
]
const Grid = (props) => (
  <View style={{ flex: 1 }}>
    <ScrollView horizontal>
      {gridItems.map((item) => (
        <GridItem title={item.title} />
      ))}
    </ScrollView>
  </View>
);
export default Grid;
