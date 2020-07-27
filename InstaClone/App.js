import React, { Fragment, useState, useEffect } from 'react';
import {
  ScrollView,
  FlatList,
} from 'react-native';
import { ImageHeader } from './src/Components/ImageHeader';
import { Photo } from './src/Components/Photo';

const App = () => {
  const [info, setInfo] = useState([]);

  const getInfo = async () => {
    const infoHTTP = await fetch('http://10.0.2.2:3030/feed');
    const infoJson = await infoHTTP.json();
    setInfo(infoJson);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <ScrollView>
      <FlatList
        data={info}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <Fragment>
            <ImageHeader username={item.userName} />
            <Photo />
          </Fragment>
        }
      />
    </ScrollView>
  );
};

export default App;
