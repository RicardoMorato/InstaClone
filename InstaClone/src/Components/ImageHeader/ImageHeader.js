import React, { Fragment } from 'react';
import {
  Text,
  Image,
  View,
} from 'react-native';

import style from './style';

const ImageHeader = ({ username }) => {
  return (
    <View style={style.header}>
      <Image
        source={require('../../../res/img/alura.jpg')}
        style={style.userPhoto}
      />
      <Text>{username}</Text>
    </View>
  );
}

export default ImageHeader;
