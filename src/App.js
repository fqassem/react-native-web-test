import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import IconButton from 'material-ui/IconButton';
import StarBorderIcon from 'material-ui-icons/StarBorder';

import ThemeProvider from './style/ThemeProvider';
import GridList from './components/GridList/rn';
import tilesData from './components/GridList/tileData';
import GridTile from './components/GridList/rn/GridListTile';
import GridListTileBar from './components/GridList/rn/GridListTileBar';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <View style={styles.root}>
        <Text style={styles.text}>Hello, world!</Text>
        <GridList className={styles.gridList}>
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              subtitle={tile.subtitle}
              titleStyle={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)" //TODO this doesn't work on native
            >
              <Image
                style={{ width: 300, height: 300 }} //TODO this needs to be more dynamic
                source={{ uri: tile.img }}
              />
              <GridListTileBar
                title={tile.title}
  
                actionIcon={
                  <IconButton>
                    <StarBorderIcon style={{color: 'white'}} />
                  </IconButton>
                }
            />
            </GridTile>
          ))}
        </GridList>
      </View>
      </ThemeProvider>
    );
  }
}

const theme = {
  fontColor: 'yellow'
};

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
