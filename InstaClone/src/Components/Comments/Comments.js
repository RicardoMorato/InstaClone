import React, { Fragment, useState } from 'react';
import {
  Text,
  FlatList,
  TextInput,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

import style from './style';

const Comments = ({ comments }) => {
  const [commentsState, setCommentsState] = useState(comments);
  let textInputContent = '';
  let textInputField;

  const addComment = () => {
    textInputField.clear();
    const newComment = {
      date: Date.now(),
      text: textInputContent,
      userName: "RicardoMorato",
    };

    setCommentsState([...commentsState, newComment]);
  };

  return (
    <Fragment>
      <FlatList
        data={commentsState}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
          <View style={style.addComments}>
            <Text style={style.userName} >{item.userName}</Text>
            <Text style={style.comments} >{item.text}</Text>
          </View>
        }
      />

      <View style={style.addComments}>
        <TextInput
          ref={textInput => textInputField = textInput}
          onChangeText={text => textInputContent = text}
          placeholder={'Leave your comment here'}
          style={{ flex: 1, }}
        />
        <TouchableOpacity onPress={addComment} >
          <Image
            style={style.imgSend}
            source={require('../../../res/img/send.png')}
          />
        </TouchableOpacity>
      </View>
    </Fragment>
  );
}

export default Comments;
