import {Platform} from 'react-native';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons
  from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import icoMoonConfig from 'src/assets/icon/selection.json';

const check = Platform.OS === 'android' ? 'goEdu' : 'icomoon';

const CustomIcon = createIconSetFromIcoMoon(icoMoonConfig, check);

const Icons = {
  goEdu: CustomIcon,
  fontAwesome5: FontAwesome5,
  antDesign: AntDesign,
  feather: Feather,
  fontAwesome: FontAwesome,
  materialCommunityIcons: MaterialCommunityIcons,
  materialIcons: MaterialIcons,
  evilIcons: EvilIcons,
  fontisto: Fontisto,
  octicons: Octicons,
  ionicons: Ionicons,
};

export type IconType = keyof typeof Icons;

export const getIconComponent = (componentName: IconType) => {
  if (!Icons[componentName]) {
    return null;
  }
  return Icons[componentName];
};
