import React from 'react';

import {isNumber} from 'lodash';
import {
  StyleSheet,
  View,
} from 'react-native';
import {getSize} from 'src/base/common/responsive';
import {
  handleMargin,
  handlePadding,
  handleRound,
  handleSquare,
} from 'src/components/shared';
import Color from 'src/theme/Color';

import styles from './styles';
import {IBlock} from './types';

const Block: React.FC<IBlock> = ({
  flex,
  flexShrink,
  flexGrow,
  row,
  column,
  shadow,
  backgroundColor,
  space,
  padding,
  margin,
  alignStart,
  alignCenter,
  alignEnd,
  wrap,
  justifyCenter,
  justifyEnd,
  justifyStart,
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
  radius,
  height,
  width,
  square,
  round,
  borderWidth,
  relative,
  absolute,
  top,
  left,
  right,
  bottom,
  borderColor,
  children,
  overflow,
  alignSelf,
  style,
  shadowColor,
  opacity,
  elevation,
  ...props
}) => {
  const blockStyles: any = [
    flex && styles.block,
    flexShrink && styles.flexShrink,
    flexGrow && styles.flexGrow,
    !flex && {flex: 0},
    width && {width: isNumber(width) ? getSize.s(width) : width},
    height && {height: isNumber(height) ? getSize.s(height) : height},
    row && styles.row,
    column && styles.column,
    shadow && {
      ...styles.shadow,
      shadowColor: shadowColor ? (Color as any)[shadowColor] : Color.BLACK,
      elevation: elevation || 3,
    },
    wrap && {flexWrap: 'wrap'},
    backgroundColor && {
      backgroundColor: (Color as any)[backgroundColor],
    },
    backgroundColor && !(Color as any)[backgroundColor] && {backgroundColor},
    padding && {...handlePadding(getSize.m(padding))},
    margin && {...handleMargin(getSize.m(margin))},
    alignStart && styles.alignStart,
    alignCenter && styles.alignCenter,
    alignEnd && styles.alignEnd,
    justifyCenter && styles.justifyCenter,
    justifyStart && styles.justifyStart,
    justifyEnd && styles.justifyEnd,
    space && {justifyContent: `space-${space}`},
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
    radius && {borderRadius: getSize.s(radius)},
    borderWidth && {borderWidth: borderWidth},
    square && {...handleSquare(getSize.s(square))},
    round && {...handleRound(getSize.s(round))},
    isNumber(opacity) && {opacity: opacity},
    borderColor && {
      borderColor: (Color as any)[borderColor] || Color.BLACK,
    },
    relative && {position: 'relative'},
    absolute && {position: 'absolute'},
    isNumber(top) && {top: getSize.v(top)},
    isNumber(left) && {left: getSize.s(left)},
    isNumber(right) && {right: getSize.s(right)},
    isNumber(bottom) && {bottom: getSize.v(bottom)},
    overflow && {overflow},
    alignSelf && {alignSelf},
    {...StyleSheet.flatten(style)},
  ];

  return (
    <View style={blockStyles} {...props}>
      {children}
    </View>
  );
};

export default Block;
