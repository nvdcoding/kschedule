import {
  Dimensions,
  StatusBar,
} from 'react-native';
import {IS_IOS} from 'src/base/common/Constants';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  DEVICE_WIDTH: width,
  DEVICE_HEIGHT: height,
  toolbarSize: IS_IOS ? 10 : StatusBar.currentHeight,
};
