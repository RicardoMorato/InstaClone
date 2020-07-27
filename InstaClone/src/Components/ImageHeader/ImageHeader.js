import React, { Fragment } from 'react';
import {
  Text,
  Image,
  View,
} from 'react-native';

import style from './style';

const ImageHeader = ({ username, urlImage }) => {
  return (
    <View style={style.header}>
      <Image
        source={{ uri: urlImage }}
        style={style.userPhoto}
      />
      <Text>{username}</Text>
    </View>
  );
}

export default ImageHeader;
