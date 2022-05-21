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
  containerHome: {
    display: 'flex',
    flexDirection: 'column',
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
  text: {
    padding: 10,
    color: Color.WHITE,
    textAlign: 'center',
    fontSize: 20,
  },
  number: {
    backgroundColor: Color.TEXT_PRIMARY,
    color: '#fff',
    borderRadius: getSize.m(10),
    padding: getSize.m(10),
    width: 20,
    height: 20,
  },
  tableSchedule: {},
  time: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },
  hour: {
    marginRight: 5,
  },
  main: {},
  // search
  search: {
    color: Color.TEXT_PRIMARY,
  },
  // user
  textUser: {
    color: Color.TEXT_PRIMARY,
  },
  btnBack: {
    marginTop: 20,
  },
  avtUser: {
    alignItems: 'center',
  },
  avtImg: {
    width: getSize.m(100),
    height: getSize.m(100),
  },
  textAvt: {
    color: '#ccc',
    fontSize: getSize.m(20),
  },
  settingUser: {
    color: '#ccc',
  },
  ItemInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
