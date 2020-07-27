import React, { Fragment } from 'react';
import {
  Text,
  Image,
} from 'react-native';

import style from './style';

const ImageHeader = ({ username }) => {
  return (
    <Fragment>
      <Image
        source={require('../../../res/img/alura.jpg')}
        style={style.userPhoto}
      />
      <Text>{username}</Text>
    </Fragment>
  );
}

export default ImageHeader;
