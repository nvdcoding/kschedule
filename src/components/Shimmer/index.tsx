import React, {useEffect, useRef} from 'react';

import {
  Animated,
  Easing,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Dimens from 'src/base/common/Dimens';
import {getSize} from 'src/base/common/responsive';
import Color from '../../theme/Color';

const LinearGradientAnim = Animated.createAnimatedComponent(LinearGradient);

interface ShimmerProps {
  width?: number;
  height?: number;
  radius?: number;
  marginVer?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  colors?: Array<string>;
  style?: StyleProp<ViewStyle>;
  children?: any;
}

const Shimmer = ({
  width = Dimens.DEVICE_WIDTH,
  height = 15,
  radius = 5,
  marginVer = 0,
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  colors,
  style,
  children,
}: ShimmerProps) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ).start();
  }, [animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, width],
  });

  return (
    <View
      style={[
        style,
        styles.container(
          width,
          height,
          radius,
          marginVer,
          marginTop,
          marginBottom,
          marginLeft,
          marginRight,
          colors,
        ),
      ]}>
      <LinearGradientAnim
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={
          colors || [
            Color.BLOCK_GRAY,
            Color.BLOCK_GRAY,
            `${Color.BLOCK_GRAY}40`,
            `${Color.BLOCK_GRAY}60`,
          ]
        }
        style={{
          ...StyleSheet.absoluteFillObject,
          transform: [{translateX}],
        }}
      />
      <View>{children}</View>
    </View>
  );
};

const styles: any = StyleSheet.create<any>({
  container: (
    width,
    height,
    borderRadius,
    marginVer,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    colors,
  ) => ({
    width: width,
    height: height,
    borderRadius: getSize.m(borderRadius),
    marginVertical: getSize.m(marginVer),
    marginTop: getSize.m(marginTop),
    marginBottom: getSize.m(marginBottom),
    marginLeft: getSize.m(marginLeft),
    marginRight: getSize.m(marginRight),
    overflow: 'hidden',
    backgroundColor: colors ? colors[0] : `${Color.GRAY_HOLDER}40`,
  }),
});

export default Shimmer;
