const getInfo = async (callback) => {
  const infoHTTP = await fetch('http://10.0.2.2:3030/feed');
  const infoJson = await infoHTTP.json();
  callback(infoJson);
};

export default getInfo;
