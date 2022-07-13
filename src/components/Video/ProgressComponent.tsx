import React, { useCallback, useEffect, useState } from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { getSize } from 'src/base/common/responsive';
import { debug } from 'src/base/utils/DebugUtil';
import { Block } from 'src/components';
import styles from './styles';

const POINT_START = 0;

const ProgressVideo = ({ totalTime, currentTime, handleProgress }) => {
  const [maxWidth, setMaxWidth] = useState<number>(0);
  const [onPan, setOnPan] = useState<boolean>(false);
  const x = useSharedValue(POINT_START);

  const onEnded = () => {
    setTimeout(() => setOnPan(false), 1500);
    if (x.value <= POINT_START) {
      handleProgress(0);
    } else {
      if (x.value >= maxWidth) {
        handleProgress(totalTime - 10);
      } else {
        handleProgress((x.value / maxWidth) * totalTime);
      }
    }
  };

  const onActivated = () => {
    setOnPan(true);
  };

  useEffect(() => {
    !onPan && (x.value = maxWidth * (currentTime / totalTime));
  }, [currentTime, onPan]);

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
              : x.value >= maxWidth
                ? maxWidth
                : x.value,
        },
      ],
    };
  });

  const onLayout = useCallback(
    event => {
      const { width } = event.nativeEvent.layout;
      setMaxWidth(width - getSize.m(17));
    },
    [maxWidth],
  );

  return (
    <Block onLayout={onLayout} style={styles.barProgress}>
      <PanGestureHandler
        onActivated={onActivated}
        onEnded={onEnded}
        onGestureEvent={eventHandler}>
        <Animated.View style={[styles.btnPan, uas]}>
          <Block style={styles.btnPanHandle} />
        </Animated.View>
      </PanGestureHandler>
    </Block>
  );
};

export default ProgressVideo;
