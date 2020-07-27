import React, { Fragment, useState, useEffect } from 'react';
import {
  ScrollView,
  FlatList,
} from 'react-native';
import { ImageHeader } from './src/Components/ImageHeader';
import { Photo } from './src/Components/Photo';
import getInfo from  './src/apiCommunication/feed';

const App = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getInfo(setInfo);
  }, []);

  return (
    <ScrollView>
      <FlatList
        data={info}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <Fragment>
            <ImageHeader
              username={item.userName}
              urlImage={item.userURL}
            />
            <Photo
              photoUrl={item.url}
              description={item.description}
              qtdLikes={item.likes}
            />
          </Fragment>
        }
      />
    </ScrollView>
  );
};

export default App;
