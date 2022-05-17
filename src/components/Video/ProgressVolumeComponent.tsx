import React from 'react';
import {TouchableOpacity} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import {getSize} from 'src/base/common/responsive';
import {Block} from 'src/components';
import Color from 'src/theme/Color';
import styles from './styles';

const POINT_START = 0;
const MAX_VOLUME = getSize.m(45);

const ProgressVolumeComponent = ({handleVolume}) => {
  const x = useSharedValue(MAX_VOLUME);

  const onEnded = () => {
    if (x.value <= POINT_START) {
      handleVolume(0);
    } else {
      if (x.value >= MAX_VOLUME) {
        handleVolume(1);
      } else {
        handleVolume(x.value / MAX_VOLUME);
      }
    }
  };

  const handleIconVolume = () => {
    if (x.value <= POINT_START) {
      x.value = MAX_VOLUME;
      handleVolume(1);
    } else {
      x.value = POINT_START;
      handleVolume(0);
    }
  };

  const eventHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startX = x.value;
    },
    onActive: (event, ctx: any) => {
      x.value = ctx.startX + event.translationX;
    },
    onEnd: (event, ctx: any) => {
      x.value = ctx.startX + event.translationX;
    },
  });

  const uas = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX:
            x.value <= POINT_START
              ? POINT_START
              : x.value >= MAX_VOLUME
              ? MAX_VOLUME
              : x.value,
        },
      ],
    };
  });

  return (
    <Block row alignCenter marginRight={5}>
      <TouchableOpacity onPress={handleIconVolume} activeOpacity={0.5}>
        <Icon
          name={'volume-medium-outline'}
          color={Color.WHITE}
          size={getSize.m(20)}
        />
      </TouchableOpacity>
      <Block style={styles.barProgressVolume}>
        <PanGestureHandler onEnded={onEnded} onGestureEvent={eventHandler}>
          <Animated.View style={[styles.btnPan, uas]}>
            <Block style={styles.btnPanHandleVolume} />
          </Animated.View>
        </PanGestureHandler>
      </Block>
    </Block>
  );
};

export default ProgressVolumeComponent;
