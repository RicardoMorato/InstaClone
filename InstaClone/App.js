import React, { Fragment } from 'react';
import {
  ScrollView,
  FlatList,
} from 'react-native';
import { ImageHeader } from './src/Components/ImageHeader';
import { Photo } from './src/Components/Photo';

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
            <ImageHeader username={item.usuario} />
            <Photo />
          </Fragment>
        }
      />
    </ScrollView>
  );
};

export default App;
