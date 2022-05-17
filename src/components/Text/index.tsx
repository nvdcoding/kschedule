import React, {forwardRef} from 'react';

import {isNumber} from 'lodash';
import {
  Animated,
  StyleSheet,
  Text,
} from 'react-native';
import {getSize} from 'src/base/common/responsive';
import Color from 'src/theme/Color';

import {
  handleMargin,
  handlePadding,
} from '../shared';
import {ITypography} from './types';

const Typography = forwardRef<any, ITypography>((props, ref) => {
  const {
    flex,
    flexShrink,
    flexGrow,
    size = 14,
    color = 'TEXT_MAIN',
    center,
    right,
    justify,
    padding,
    margin,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    paddingVertical,
    paddingHorizontal,
    marginVertical,
    marginHorizontal,
    style,
    // fontType = 'regular',
    lineHeight,
    animated,
    // customFont = 'default',
    ...textProps
  } = props;
  const textStyle: any = [
    flex && {flex: 1},
    flexShrink && {flexShrink: 1},
    flexGrow && {flexGrow: 1},
    // {fontWeight: Font.fonts.fontWeight[fontType]},
    {color: (Color as any)[color] || color},
    center && {textAlign: 'center'},
    right && {textAlign: 'right'},
    justify && {textAlign: 'justify'},
    padding && {...handlePadding(getSize.m(padding))},
    margin && {...handleMargin(getSize.m(margin))},
    paddingTop && {paddingTop: getSize.m(paddingTop)},
    paddingRight && {paddingRight: getSize.m(paddingRight)},
    paddingBottom && {paddingBottom: getSize.m(paddingBottom)},
    paddingLeft && {paddingLeft: getSize.m(paddingLeft)},
    marginBottom && {marginBottom: getSize.m(marginBottom)},
    marginTop && {marginTop: getSize.m(marginTop)},
    marginRight && {marginRight: getSize.m(marginRight)},
    marginLeft && {marginLeft: getSize.m(marginLeft)},
    paddingHorizontal && {paddingHorizontal: getSize.m(paddingHorizontal)},
    paddingVertical && {paddingVertical: getSize.m(paddingVertical)},
    marginHorizontal && {marginHorizontal: getSize.m(marginHorizontal)},
    marginVertical && {marginVertical: getSize.m(marginVertical)},
    isNumber(lineHeight) && {lineHeight: getSize.m(lineHeight)},
    {fontSize: getSize.m(size)},
    // {fontFamily: theme.fonts.fontFamily[customFont]},
    {...StyleSheet.flatten(style)},
  ];

  if (animated) {
    return (
      <Animated.Text
        style={textStyle}
        {...textProps}
        maxFontSizeMultiplier={12}>
        {props.children}
      </Animated.Text>
    );
  }

  return (
    <Text style={textStyle} {...textProps} ref={ref}>
      {props.children}
    </Text>
  );
});

export default Typography;
