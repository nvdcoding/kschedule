import {StyleSheet} from 'react-native';
import Dimens from 'src/base/common/Dimens';
import {getSize} from 'src/base/common/responsive';
import Color from 'src/theme/Color';

const styles = StyleSheet.create({
  backgroundLogin: {
    ...StyleSheet.absoluteFillObject,
  },
  containerHome: {
    marginTop: getSize.m(20),
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: getSize.m(15),
    paddingRight: getSize.m(15),
    width: Dimens.DEVICE_WIDTH,
  },
  content: {
    flex: 1,
  },
  contentHome: {
    paddingBottom: 20,
    marginTop: 20,
    alignSelf: 'center',
    width: Dimens.DEVICE_WIDTH * 0.8,
    backgroundColor: '#F75553',
    borderRadius: getSize.m(10),
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
  btnBack: {
    marginTop: 20,
  },
  textTitle: {
    textAlign: 'center',
    fontSize: getSize.m(20),
    fontWeight: '700',
    color: Color.TEXT_PRIMARY,
  },
  Notification: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: getSize.m(20),
  },
  NotificationText: {
    color: '#4C4847',
    fontSize: getSize.m(18),
  },
  NotificationSwitch: {
    transform: [{scaleX: getSize.m(1.2)}, {scaleY: getSize.m(1.2)}],
  },
});

export default styles;
