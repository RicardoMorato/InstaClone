import React, { Fragment, useState } from 'react';
import {
  Text,
  TextInput,
  Button,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import style from './style';
import logIn from '../../apiCommunication/login';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const tryLogIn = async () => {
    try {
      const token = await logIn(user, password);
      await AsyncStorage.setItem('instaCloneToken', token);

      // Goes to feed screen

    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <Fragment>
      <View style={style.container}>
        <TextInput
          style={style.inputs}
          placeholder="Usuário"
          onChangeText={text => setUser(text)}
        />
        <TextInput
          style={style.inputs}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />

      <Text>{errorMessage}</Text>
      </View>
      <View style={style.buttonView}>
        <Button
          onPress={tryLogIn}
          title="Entrar"
        />
      </View>
    </Fragment>
  );
};

export default Login;
