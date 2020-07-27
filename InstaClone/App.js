/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>Ricardo</Text>
      <Image
        source={require('./res/img/alura.jpg')}
        style={styles.image}
      />
      <Text>Nythia</Text>
      <Image
        source={require('./res/img/alura.jpg')}
        style={styles.image}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').width,
  }
});

export default App;
