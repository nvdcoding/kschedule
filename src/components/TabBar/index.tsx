import React from 'react';

import {StyleProp, StyleSheet, TouchableOpacity} from 'react-native';
import {getIconComponent} from 'src/assets/icon';
import Dimens from 'src/base/common/Dimens';
import {getSize} from 'src/base/common/responsive';
import {Block, Text} from 'src/components';
import Color from 'src/theme/Color';
import Font from 'src/theme/Font';

const Icon = getIconComponent('goEdu');

interface ITabBar {
  title: string;
  sizeLeftIcon?: number;
  styleLeftIcon?: StyleProp<object>;
  styleRightIcon?: StyleProp<object>;
  sizeRightIcon?: number;
  handleLeftIcon?: () => void;
  handleRightIcon?: () => void;
  isRightIcon?: boolean;
  isCenter?: boolean;
  nameIconLeft?: string;
  nameIconRight?: string;
  colorLeftIcon?: string;
  colorRightIcon?: string;
  noBorder?: boolean;
}

const TabBar = ({
  title,
  sizeLeftIcon,
  styleLeftIcon,
  styleRightIcon,
  sizeRightIcon,
  handleLeftIcon,
  handleRightIcon,
  isRightIcon = true,
  isCenter = true,
  nameIconLeft,
  nameIconRight,
  colorRightIcon,
  colorLeftIcon,
  noBorder,
}: ITabBar) => {
  return (
    <Block style={[styles.container, noBorder && styles.noBorder]}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={handleLeftIcon}
        style={[styles.iconLeft, styleLeftIcon]}>
        <Icon
          name={nameIconLeft ? nameIconLeft : 'app-icon'}
          color={colorLeftIcon ? colorLeftIcon : Color.GREEN}
          size={getSize.m(sizeLeftIcon ? sizeLeftIcon : 26)}
        />
      </TouchableOpacity>
      <Block
        style={[
          styles.title,
          isRightIcon && styles.titleRightIcon,
          isCenter && styles.isCenter,
        ]}>
        <Text numberOfLines={1} style={styles.textTitle}>
          {title}
        </Text>
      </Block>
      {isRightIcon ? (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={handleRightIcon}
          style={[styles.iconRight, styleRightIcon]}>
          <Icon
            name={nameIconRight ? nameIconRight : 'notify'}
            color={colorRightIcon ? colorRightIcon : Color.BLACK}
            size={getSize.m(sizeRightIcon ? sizeRightIcon : 24)}
          />
        </TouchableOpacity>
      ) : (
        <Block />
      )}
    </Block>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D9DBE9',
    paddingBottom: getSize.m(22),
    paddingTop: getSize.m(25),
    marginTop: getSize.m(15),
  },

  noBorder: {
    borderBottomWidth: 0,
  },

  iconLeft: {
    position: 'absolute',
    left: getSize.m(22),
    bottom: getSize.m(16),
    zIndex: 100,
  },

  title: {
    position: 'absolute',
    marginLeft: getSize.m(48),
    marginRight: getSize.m(50),
    bottom: getSize.m(20),
    width: Dimens.DEVICE_WIDTH - getSize.m(80),
  },

  titleRightIcon: {
    marginLeft: getSize.m(60),
    width: Dimens.DEVICE_WIDTH - getSize.m(110),
  },

  isCenter: {
    alignItems: 'center',
  },

  textTitle: {
    fontSize: getSize.m(15, 0.3),
    color: Color.BLACK,
    fontFamily: Font.font_SVN_700,
  },

  iconRight: {
    position: 'absolute',
    right: getSize.m(20),
    bottom: getSize.m(16),
    zIndex: 100,
  },
});
