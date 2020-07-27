/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  FlatList,
} from 'react-native';

const info = [
  {_id: '1', usuario: "Ricardo"},
  {_id: '2', usuario: "Nythia"},
  {_id: '3', usuario: "Rebeca"},
];

const App = () => {
  return (
    <ScrollView>
      <FlatList
        data={info}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) =>
          <Fragment>
            <Text>{item.usuario}</Text>
            <Image
              source={require('./res/img/alura.jpg')}
              style={styles.image}
            />
          </Fragment>
        }
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
