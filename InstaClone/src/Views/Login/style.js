import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

const style = StyleSheet.create({
  container: {
    flexGrow: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputs: {
    width: screenWidth * 0.8,
    textAlign: 'center',
    marginTop: 10,
    fontSize: 30,
  },
  buttonView: {
    alignItems: 'center',
    marginBottom: 70,
  }
});

export default style;
