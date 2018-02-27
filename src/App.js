import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Netflix from './components/NetflixGrid/rn';

class App extends React.Component {
  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.text}>Hello, world!</Text>
        <Netflix />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontWeight: 'bold' }
});

export default App;
