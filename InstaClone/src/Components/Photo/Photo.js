import React, { Fragment } from 'react';
import {
  Image,
  Text,
} from 'react-native';
import style from './style';

const Photo = ({ photoUrl, description }) => {
  return (
    <Fragment>
      <Image
        source={{ uri: photoUrl }}
        style={style.photo}
      />
      <Text>{description}</Text>
    </Fragment>
  );
};

export default Photo;
