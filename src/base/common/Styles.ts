import {
  ImageStyle,
  StyleProp,
  StyleSheet,
} from 'react-native';
import Color from 'src/theme/Color';
import Font from 'src/theme/Font';

import Dimens from './Dimens';
import {getSize} from './responsive';

export const iconStyle = (size): StyleProp<ImageStyle> => ({
  width: size,
  height: size,
  resizeMode: 'contain',
});

export default StyleSheet.create({
  scrollContent: {
    marginTop: 5,
  },

  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
    paddingTop: Dimens.toolbarSize,
  },

  containerTablet: {
    flex: 1,
    backgroundColor: Color.WHITE,
    paddingTop: Dimens.toolbarSize,
  },

  paddingTopTabBar: {
    marginTop: 12,
  },

  marginBottomSetting: {
    marginBottom: 15,
  },

  root: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    zIndex: 1,
    position: 'absolute',
  },

  content: {
    flex: 1,
  },

  iconToolBarContainer: {
    position: 'absolute',
    height: Dimens.toolbarSize,
    width: Dimens.toolbarSize,
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
  },

  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  centerVertical: {
    flex: 1,
    justifyContent: 'center',
  },

  centerHorizontal: {
    flex: 1,
    alignItems: 'center',
  },

  centerFull: {
    flex: 1,
    width: Dimens.DEVICE_WIDTH,
    height: Dimens.DEVICE_HEIGHT - 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  centerNoFlex: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  row: {
    flexDirection: 'row',
  },

  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowSpaceCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  rowCenterVertical: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rowCenterHorizontal: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  rowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  absolute: {
    position: 'absolute',
  },

  imgBig: {
    width: Dimens.DEVICE_WIDTH / 2,
    height: Dimens.DEVICE_WIDTH / 2,
    resizeMode: 'contain',
  },

  imgMedium: {
    width: Dimens.DEVICE_WIDTH / 3,
    height: Dimens.DEVICE_WIDTH / 3,
    resizeMode: 'contain',
  },

  imgSmall: {
    width: Dimens.DEVICE_WIDTH / 4,
    resizeMode: 'contain',
  },

  imgFull: {
    width: Dimens.DEVICE_WIDTH,
    resizeMode: 'contain',
  },

  textCenter: {
    textAlign: 'center',
  },

  textBold: {
    fontWeight: 'bold',
  },

  textUnderLink: {
    textDecorationLine: 'underline',
  },

  textCenterLine: {
    textDecorationLine: 'line-through',
  },

  space: {
    height: 8,
    width: 8,
  },

  spaceButton: {
    height: 30,
  },

  icon_48: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
  },

  avatar_48: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },

  icon_40: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },

  icon_32: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },

  icon_24: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },

  icon_20: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  icon_16: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },

  icon_80: {
    width: 80,
    height: 80,
  },

  icon_96: {
    width: 96,
    height: 96,
    resizeMode: 'contain',
  },

  flexRightCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  txtHeader: {
    fontSize: getSize.s(18),
    fontFamily: Font.font_semi_bold_600,
    color: Color.TEXT_MAIN,
  },
  largeTitle: {
    color: Color.TEXT_MAIN,
    fontSize: 24,
  },
  mediumTitle: {
    color: Color.TEXT_MAIN,
    fontSize: 21,
    fontWeight: 'bold',
  },
  description: {
    color: Color.TEXT_MAIN,
    opacity: 0.5,
    fontFamily: Font.font_medium_500,
  },
  btnNotSign: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF22',
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    paddingRight: 16,
    overflow: 'hidden',
  },
  boxIcon: {
    backgroundColor: '#FFFFFF22',
    height: 32,
    width: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxNotSign: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 16,
  },
  txtNotSign: {
    marginLeft: 8,
    fontSize: 12,
    color: Color.TEXT_MAIN,
    fontFamily: Font.font_medium_500,
  },
  btnWarning: {
    backgroundColor: '#FFFFFF22',
    marginLeft: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxAccount: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 32,
  },
  txtSync: {
    color: Color.WHITE,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 16,
    padding: 16,
    borderColor: '#FFFFFF22',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 16,
    fontFamily: Font.font_medium_500,
  },
});
