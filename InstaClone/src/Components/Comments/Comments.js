import React, { Fragment } from 'react';
import {
  Text,
  FlatList,
} from 'react-native';

import style from './style';

const Comments = ({ comments }) => {
  return (
    <FlatList
      data={comments}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) =>
        <Text>{item.text}</Text>
      }
    >

    </FlatList>
  );
}

export default Comments;
