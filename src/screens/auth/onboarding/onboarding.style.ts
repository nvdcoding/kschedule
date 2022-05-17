import {StyleSheet} from 'react-native';
import {isTablet} from 'src/base/common/Constants';
import Dimens from 'src/base/common/Dimens';
import {getSize} from 'src/base/common/responsive';
import Styles from 'src/base/common/Styles';
import Color from 'src/theme/Color';
import Font from 'src/theme/Font';

const styles = StyleSheet.create({
  textTitle: {
    fontFamily: Font.font_bold_700,
    color: Color.RED_HOLDER,
    fontSize: getSize.m(35, 0.3),
  },

  textTitleEdu: {
    fontFamily: Font.font_bold_700,
    color: Color.GREEN_HOLDER,
    fontSize: getSize.m(35, 0.3),
  },

  imgIntro: {
    alignSelf: 'center',
    marginTop: getSize.m(10),
    width: getSize.m(
      isTablet ? Dimens.DEVICE_WIDTH * 0.22 : Dimens.DEVICE_WIDTH,
    ),
    height: getSize.m(
      isTablet
        ? (Dimens.DEVICE_WIDTH * 0.22 * 1176) / 1648
        : (Dimens.DEVICE_WIDTH * 1176) / 1648,
    ),
  },

  content: {
    marginHorizontal: getSize.m(30),
  },

  contentTablet: {
    marginHorizontal: (Dimens.DEVICE_WIDTH * 0.4) / 2,
  },

  textWelcome: {
    fontFamily: Font.font_SVN_700,
    color: '#2E2E2E',
    fontSize: getSize.m(20, 0.3),
    marginTop: getSize.m(10),
  },

  noteWelcome: {
    color: '#2E2E2E',
    fontFamily: Font.font_SVN_400,
    fontSize: getSize.m(15, 0.3),
    marginTop: getSize.m(10),
  },

  btnNext: {
    position: 'absolute',
    bottom: getSize.m(20),
    backgroundColor: Color.GREEN,
    height: getSize.m(50),
    alignSelf: 'center',
    ...Styles.centerNoFlex,
    borderRadius: getSize.m(25),
    paddingHorizontal: getSize.m(40),
  },

  btnNextTablet: {
    right: (Dimens.DEVICE_WIDTH * 0.4) / 2,
  },

  textNext: {
    fontSize: getSize.m(15, 0.3),
    color: Color.WHITE,
    fontFamily: Font.font_SVN_700,
  },

  btnIntroNotify: {
    position: 'absolute',
    bottom: getSize.m(20),
    alignSelf: 'center',
  },

  btnIntroNotifyTablet: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    width: Dimens.DEVICE_WIDTH * 0.6,
    bottom: getSize.m(20),
  },

  btnTurnOn: {
    backgroundColor: Color.GREEN,
    height: getSize.m(54),
    borderRadius: getSize.m(28),
    paddingHorizontal: getSize.m(50),
    ...Styles.centerNoFlex,
    marginBottom: getSize.m(15),
  },

  btnTurnOff: {
    height: getSize.m(54),
    ...Styles.centerNoFlex,
  },

  textTurnOff: {
    fontSize: getSize.m(18, 0.3),
    fontFamily: Font.font_SVN_400,
    color: '#A7A7A7',
  },
});

export default styles;
