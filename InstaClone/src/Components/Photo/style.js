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
    marginLeft: 10,
  },
  viewLikes: {
    flexDirection: 'row',
  },
});

export default style;
