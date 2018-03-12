import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import GridList from './components/GridList/rn';
import tilesData from './components/GridList/tileData';
import GridTile from './components/GridList/rn/GridListTile';
import GridListTileBar from './components/GridList/rn/GridListTileBar';

class App extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>Hello, world!</Text>
        <GridList className={styles.gridList} cols={2.5}>
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              subtitle={tile.subtitle}
              titleStyle={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
              <Image
                style={{ width: 300, height: 300 }}
                source={{ uri: tile.img }}
              />
              <GridListTileBar
              title={tile.title}
  
              actionIcon={
               "*"
              }
            />
            </GridTile>
          ))}
        </GridList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: { fontWeight: 'bold' },
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    flexWrap: 'nowrap',
  },
});

export default App;
