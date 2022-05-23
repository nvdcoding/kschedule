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
    color: '#686862',
    marginLeft: getSize.m(4),
    fontSize: getSize.m(12),
  },
  ItemInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: getSize.m(10),
  },
  mainItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  // timetable
  timetableTitle: {
    color: Color.TEXT_PRIMARY,
    fontSize: getSize.m(20),
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: getSize.m(20),
  },
  status: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: getSize.m(10),
  },
  statusTitle: {
    color: '#232323',
    fontWeight: '500',
    fontSize: getSize.m(15),
    marginRight: getSize.m(10),
  },
  statusY: {
    fontSize: getSize.m(15),
    color: Color.TEXT_SECONDARY,
  },
  statusN: {
    fontSize: getSize.m(15),
    color: Color.TEXT_PRIMARY,
  },
  Notes: {
    overflow: 'visible',
    flexDirection: 'row',
    marginTop: getSize.m(15),
  },
  notesTitle: {
    color: Color.TEXT_PRIMARY,
    fontWeight: '500',
    fontSize: getSize.m(15),
    marginRight: getSize.m(10),
  },
  notesDes: {
    color: '#232323',
    fontSize: getSize.m(15),
    width: Dimens.DEVICE_WIDTH,
  },
  btnLogin: {
    backgroundColor: Color.TEXT_PRIMARY,
    height: getSize.m(48),
    borderRadius: getSize.m(24),
    marginTop: getSize.m(30),
    ...Styles.centerNoFlex,
    marginBottom: getSize.m(20),
  },
  textLogin: {
    color: Color.WHITE,
    fontFamily: Font.font_SVN_700,
    fontSize: getSize.m(15, 0.3),
  },

  container: {
    // backgroundColor: '#4B52C3',
    backgroundColor: '#FFFFFF',
    flex: 1,
    // paddingTop: Dimens.toolbarSize,
  },

  textId: {
    fontSize: getSize.m(13, 0.3),
    marginTop: getSize.m(3),
    color: Color.SMOKE,
    fontFamily: Font.font_SVN_400,
    letterSpacing: 0.5,
  },

  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: getSize.m(20),
    paddingTop: Dimens.toolbarSize + getSize.m(10),
    backgroundColor: '#4B52C3',
    paddingBottom: getSize.m(16),
    borderBottomLeftRadius: getSize.m(20),
    borderBottomRightRadius: getSize.m(20),
  },

  avatar: {
    width: getSize.m(38),
    height: getSize.m(38),
    borderRadius: getSize.m(16),
  },

  textDateTitle: {
    color: Color.WHITE,
    fontSize: getSize.m(20, 0.3),
    fontFamily: Font.font_SVN_700,
  },

  item: {
    padding: getSize.m(10),
    flexDirection: 'row',
    marginHorizontal: getSize.m(10),
  },

  contentItem: {
    flex: 1,
    borderBottomWidth: getSize.m(1),
    borderColor: '#D7D8F2',
  },

  contentItemAgenda: {
    backgroundColor: '#D7D8F2',
    flex: 1,
    borderTopLeftRadius: getSize.m(20),
    borderBottomRightRadius: getSize.m(20),
    paddingHorizontal: getSize.m(14),
    paddingVertical: getSize.m(12),
    marginLeft: getSize.m(15),
    marginBottom: getSize.m(10),
  },

  itemHourText: {
    color: 'black',
  },
  itemDurationText: {
    color: 'grey',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
  itemTitleText: {
    color: '#1F1F1F',
    fontSize: getSize.m(13, 0.3),
    fontFamily: Font.font_SVN_700,
  },

  itemRangeText: {
    marginTop: getSize.m(10),
    color: '#1F1F1F',
    fontSize: getSize.m(12, 0.3),
    fontFamily: Font.font_medium_500,
  },

  itemButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  emptyItem: {
    paddingLeft: 20,
    height: 52,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  emptyItemText: {
    color: 'lightgrey',
    fontSize: 14,
  },

  containerCalendar: {
    marginTop: getSize.m(20),
  },
});

export default styles;
