import { Platform } from 'react-native';

const getInfo = async (callback) => {
  let url  = '10.0.2.2';
  if (Platform.OS === 'ios') {
    url = 'localhost';
  }

  const infoHTTP = await fetch(`http://${url}:3030/feed`);
  const infoJson = await infoHTTP.json();
  callback(infoJson);
};

export default getInfo;
