import React, { Fragment, useState } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import style from './style';

const Photo = ({ photoUrl, description }) => {
  const [liked, setLiked] = useState(false);

  const imgLike = (liked) => {
    if (liked) {
      return require('../../../res/img/s2-checked.png');
    } else {
      return require('../../../res/img/s2.png');
    }
  };

  return (
    <Fragment>
      <Image
        source={{ uri: photoUrl }}
        style={style.photo}
      />
      <Text style={style.description} >{description}</Text>

      <TouchableOpacity>
        <Image
          source={imgLike(liked)}
          style={style.like}
        />
      </TouchableOpacity>
    </Fragment>
  );
};

export default Photo;
