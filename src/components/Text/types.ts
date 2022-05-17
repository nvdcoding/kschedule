import {
  StyleProp,
  TextProps,
  TextStyle,
} from 'react-native';
import Font from 'src/theme/Font';

export interface ITypography extends TextProps {
  flex?: boolean;
  flexShrink?: boolean;
  flexGrow?: boolean;
  fontType?: string;
  size?: number;
  color?: string;
  center?: boolean;
  right?: boolean;
  justify?: boolean;
  padding?: number;
  margin?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  style?: StyleProp<TextStyle>;
  lineHeight?: number;
  animated?: boolean;
  ref?: any;
  children?: any;
  customFont?: keyof typeof Font;
}
