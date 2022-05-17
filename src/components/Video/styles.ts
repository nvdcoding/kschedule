import {
  Dimensions,
  StyleSheet,
} from 'react-native';
import {getSize} from 'src/base/common/responsive';
import Styles from 'src/base/common/Styles';
import Color from 'src/theme/Color';
import Font from 'src/theme/Font';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  barControl: {
    position: 'absolute',
    backgroundColor: 'rgba(43,51,63,.7)',
    height: getSize.m(40),
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },

  barControlTablet: {
    alignSelf: 'center',
  },

  btnPause: {
    height: getSize.m(40),
    ...Styles.centerNoFlex,
    width: getSize.m(40),
  },

  barProgress: {
    backgroundColor: '#73859f',
    height: getSize.m(4),
    borderRadius: getSize.m(2),
    justifyContent: 'center',
    zIndex: 100,
    flex: 1,
  },

  btnPan: {
    padding: getSize.m(10),
    zIndex: 100,
    alignSelf: 'flex-start',
    paddingLeft: 0,
  },

  btnPanHandle: {
    backgroundColor: Color.WHITE,
    width: getSize.m(14),
    height: getSize.m(14),
    borderRadius: getSize.m(7),
  },

  btnPanHandleVolume: {
    backgroundColor: Color.WHITE,
    width: getSize.m(10),
    height: getSize.m(10),
    borderRadius: getSize.m(5),
  },

  barProgressVolume: {
    backgroundColor: '#73859f',
    height: getSize.m(4),
    borderRadius: getSize.m(2),
    justifyContent: 'center',
    marginLeft: getSize.m(4),
    zIndex: 20,
    width: getSize.m(50),
  },

  textTime: {
    color: Color.WHITE,
    fontFamily: Font.font_SVN_400,
    fontSize: getSize.m(12, 0.3),
    marginRight: getSize.m(10),
    marginLeft: getSize.m(15),
  },

  stylesBackgroundVideo: {
    width: width - getSize.m(280),
    height: ((width - getSize.m(280)) * 3) / 6,
    ...Styles.centerNoFlex,
    alignSelf: 'center',
  },

  fillBackgroundVideo: {
    ...StyleSheet.absoluteFillObject,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },

  btnPlayVideo: {
    width: getSize.m(44),
    height: getSize.m(44),
    borderRadius: getSize.m(22),
    borderWidth: getSize.m(2),
    borderColor: Color.WHITE,
    ...Styles.centerNoFlex,
  },

  video: {
    justifyContent: 'flex-end',
    paddingHorizontal: getSize.m(20),
    backgroundColor: '#2D2A3F',
  },

  stylesVideo: {
    width: width - getSize.m(40),
    height: ((width - getSize.m(40)) * 3) / 5,
  },

  stylesVideoTablet: {
    width: width - getSize.m(280),
    height: ((width - getSize.m(280)) * 3) / 6,
    alignSelf: 'center',
  },
});

export default styles;
