import {StyleSheet} from 'react-native';
import {getSize} from 'src/base/common/responsive';
import Color from 'src/theme/Color';
import Font from 'src/theme/Font';

const styles = StyleSheet.create({
  tabBar: {
    marginLeft: 0,
  },

  itemNotify: {
    backgroundColor: '#d8edf2',
    borderColor: '#abe8f5',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: getSize.m(16),
    paddingVertical: getSize.m(15),
    paddingHorizontal: getSize.m(20),
    marginHorizontal: getSize.m(20),
    marginBottom: getSize.m(10),
    paddingTop: getSize.m(10),
  },

  btnRemoveNotify: {
    position: 'absolute',
    top: getSize.m(8),
    right: getSize.m(8),
    padding: getSize.m(5),
  },

  titleNotify: {
    color: '#502f29',
    fontFamily: Font.font_SVN_700,
    fontSize: getSize.m(16, 0.3),
    marginRight: getSize.m(24),
  },

  contentNotify: {
    fontFamily: Font.font_SVN_400,
    fontSize: getSize.m(13, 0.5),
    color: '#565150',
    marginTop: getSize.m(8),
  },

  timeNotify: {
    fontSize: getSize.m(10, 0.5),
    fontFamily: Font.font_SVN_400,
    color: '#443e3d',
    marginTop: getSize.m(15),
  },
});

export default styles;
