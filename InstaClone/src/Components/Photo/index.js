import React, { Fragment } from 'react';
import {
  Image,
  Text,
} from 'react-native';
import style from './style';

const Photo = () => {
  return (
    <Fragment>
      <Image
        source={require('../../../res/img/alura.jpg')}
        style={style.photo}
      />
      <Text>Descrição da foto</Text>
    </Fragment>
  );
};

export default Photo;
