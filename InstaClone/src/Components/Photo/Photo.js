import React, { Fragment, useState } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import style from './style';

const Photo = ({ photoUrl, description, qtdLikes }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(qtdLikes);

  const imgLike = (liked) => {
    if (liked) {
      return require('../../../res/img/s2-checked.png');
    } else {
      return require('../../../res/img/s2.png');
    }
  };

  const likePhoto = () => {
    let qtd = likes;

    if (liked) {
      qtd -= 1;
    } else {
      qtd += 1;
    }

    setLikes(qtd);
    setLiked(!liked);
  };

  return (
    <Fragment>
      <Image
        source={{ uri: photoUrl }}
        style={style.photo}
      />
      <Text style={style.description} >{description}</Text>

      <View style={style.viewLikes}>
        <TouchableOpacity onPress={likePhoto} >
          <Image
            source={imgLike(liked)}
            style={style.like}
          />
        </TouchableOpacity>

        <Text style={style.description} >{likes}</Text>
      </View>
    </Fragment>
  );
};

export default Photo;
