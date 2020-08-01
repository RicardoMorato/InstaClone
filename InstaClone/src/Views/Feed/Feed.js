import React, { Fragment, useState, useEffect } from 'react';
import {
  ScrollView,
  FlatList,
  StatusBar,
  Platform,
} from 'react-native';
import { ImageHeader } from '../../Components/ImageHeader';
import { Photo } from '../../Components/Photo';
import { Comments } from '../../Components/Comments';
import getInfo from  '../../apiCommunication/feed';

const Feed = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getInfo(setInfo);
  }, []);

  let heigth = 0;
  if (Platform.OS === 'ios') {
    heigth = 35;
  }

  return (
    <ScrollView style={{ marginTop: heigth }}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
      />
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
            <Comments comments={item.comentarios} />
          </Fragment>
        }
      />
    </ScrollView>
  );
};

export default Feed;
