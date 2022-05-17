import {IS_IOS} from 'src/base/common/Constants';

export default {
  font_light_300: 'Poppins-Light',
  font_medium_500: 'Poppins-Medium',
  font_semi_bold_600: 'Poppins-SemiBold',
  font_bold_700: 'Poppins-Bold',
  // font_bold_800: 'Poppins-Black',
  font_regular_400: 'Poppins-Regular',
  font_SVN_400: 'SVN-Avo',
  font_SVN_italic_400: 'SVN-Avo-italic',
  font_SVN_700: IS_IOS ? 'Poppins-SemiBold' : 'SVN-Avo-bold',
  font_SVN_italic_700: 'SVN-Avo-bold-italic',
};
