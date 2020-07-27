import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const style = StyleSheet.create({
  photo: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').width,
  },
  description: {
    margin: 10,
  },
  like: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
    marginBottom: 20,
  },
});

export default style;
