import {StyleSheet} from 'react-native';
import Dimens from 'src/base/common/Dimens';
import {getSize} from 'src/base/common/responsive';
import Styles from 'src/base/common/Styles';
import Color from 'src/theme/Color';
import Font from 'src/theme/Font';

const styles = StyleSheet.create({
  backgroundLogin: {
    ...StyleSheet.absoluteFillObject,
  },

  content: {
    flex: 1,
  },

  contentTablet: {
    alignSelf: 'center',
    width: Dimens.DEVICE_WIDTH * 0.75,
    marginVertical: getSize.v(20),
    elevation: 3,
    shadowColor: Color.GRAY_DEEP,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    paddingHorizontal: Dimens.DEVICE_WIDTH * 0.12,
    backgroundColor: Color.WHITE,
  },

  textTitle: {
    color: Color.RED_HOLDER,
    fontFamily: Font.font_bold_700,
    fontSize: getSize.m(50, 0.3),
  },

  textEdu: {
    fontFamily: Font.font_bold_700,
    fontSize: getSize.m(50, 0.3),
    color: Color.GREEN_HOLDER,
  },

  contentLogin: {
    marginTop: getSize.v(20),
    alignItems: 'center',
  },

  textTitleLogin: {
    color: '#2E2E2E',
    fontFamily: Font.font_SVN_700,
    fontSize: getSize.m(25, 0.3),
  },

  textNoAccount: {
    fontFamily: Font.font_SVN_400,
    color: '#9E9E9E',
    fontSize: getSize.m(13, 0.3),
  },

  textRegister: {
    fontFamily: Font.font_SVN_700,
    color: Color.GREEN_HOLDER,
    fontSize: getSize.m(13, 0.3),
    paddingHorizontal: getSize.m(5),
    paddingVertical: getSize.m(5),
  },

  textForgetPassword: {
    color: Color.GREEN_HOLDER,
    fontFamily: Font.font_SVN_400,
    fontSize: getSize.m(13, 0.3),
  },

  btnForget: {
    alignSelf: 'flex-end',
  },

  btnLogin: {
    backgroundColor: Color.GREEN_HOLDER,
    height: getSize.m(48),
    borderRadius: getSize.m(24),
    marginTop: getSize.m(30),
    ...Styles.centerNoFlex,
  },

  btnResetPasswordTablet: {
    width: Dimens.DEVICE_WIDTH * 0.4,
    alignSelf: 'center',
  },

  textLogin: {
    color: Color.WHITE,
    fontFamily: Font.font_SVN_700,
    fontSize: getSize.m(15, 0.3),
  },

  btnBack: {
    position: 'absolute',
    top: getSize.m(20),
    left: getSize.m(20),
  },

  textResetSuccess: {
    textAlign: 'center',
    fontSize: getSize.m(15, 0.3),
    fontFamily: Font.font_SVN_400,
    color: '#2E2E2E',
    marginHorizontal: getSize.m(30),
    marginTop: getSize.m(14),
  },

  contentSignSuccess: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
  },

  textSignSuccess: {
    fontSize: getSize.m(22, 0.3),
    fontFamily: Font.font_SVN_700,
    color: '#2E2E2E',
    textAlign: 'center',
    marginBottom: getSize.m(15),
  },

  textTutorial: {
    fontSize: getSize.m(18, 0.3),
    color: '#2E2E2E',
    textAlign: 'center',
    marginHorizontal: getSize.m(40),
    fontFamily: Font.font_SVN_400,
    marginBottom: getSize.m(25),
  },

  btnGoLogin: {
    backgroundColor: Color.GREEN,
    height: getSize.m(48),
    borderRadius: getSize.m(24),
    position: 'absolute',
    bottom: getSize.m(40),
    marginHorizontal: getSize.m(30),
    width: Dimens.DEVICE_WIDTH - getSize.m(60),
    ...Styles.centerNoFlex,
  },

  btnGoLoginTablet: {
    position: 'relative',
    width: Dimens.DEVICE_WIDTH * 0.75 - getSize.m(100),
    bottom: 0,
  },
});

export default styles;
