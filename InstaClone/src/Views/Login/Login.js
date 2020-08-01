import React, { Fragment, useState } from 'react';
import {
  Text,
  TextInput,
  Button,
  View,
} from 'react-native';
import style from './style';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const tryLogIn = () => {
    console.warn(`Logging user: ${user}, password: ${password}`);
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
