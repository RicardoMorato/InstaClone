const logIn = async (user, password) => {
  let url  = '10.0.2.2';
  if (Platform.OS === 'ios') {
    url = 'localhost';
  }

  const httpHeader = {
    method: 'POST',
    body: JSON.stringify({
      userName: user,
      password,
    }),
    headers: {
      'Content-type': 'application/json'
    },
  };
  const infoHTTP = await fetch(`http://${url}:3030/users/login`, httpHeader);

  if (infoHTTP.ok) {
    return infoHTTP.headers.get('x-access-token');
  } else {
    throw new Error('Não foi possível logar');
  }
};

export default logIn;
