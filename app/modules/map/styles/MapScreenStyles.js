import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  backgroundView: {flex: 1},
  map: {
    flex: 1,
  },
  textInput: {
    position: 'absolute',
    top: 50,
    left: 10,
    right: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
  },
  buttonLocation: {
    position: 'absolute',
    top: 50,
    left: 10,
    right: 10,
    height: 40,
    backgroundColor: 'transparent',
  },
});

export default styles;
