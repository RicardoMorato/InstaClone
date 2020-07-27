import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const style = StyleSheet.create({
  photo: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').width,
  }
});

export default style;
