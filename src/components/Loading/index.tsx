import React, {Component} from 'react';

import {ActivityIndicator, StyleSheet, View} from 'react-native';
import Color from 'src/theme/Color';

export const SIZES = {SMALL: 'small', LARGE: 'large'};
export const Mode = {normal: 'normal', full: 'full', overlay: 'overlay'};

type ISpinnerProps = {
  color: string;
  size?: 'small' | 'large';
  mode?: 'normal' | 'full' | 'overlay';
};

class Spinner extends Component<ISpinnerProps> {
  static defaultProps = {
    color: Color.GREEN,
    size: SIZES.LARGE,
    mode: Mode.normal,
  };

  render() {
    const {size, color, mode} = this.props;

    let containerStyle = styles.container;

    switch (mode) {
      case Mode.full:
        containerStyle = styles.container_full_stretch;
        break;
      case Mode.overlay:
        containerStyle = styles.container_overlay;
        break;
    }
    return (
      <View style={containerStyle}>
        <ActivityIndicator
          size={size}
          color={color}
          style={[
            styles.wrapper,
            {borderRadius: size === SIZES.SMALL ? 10 : 20},
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    height: null,
    width: null,
  },
  container_full_stretch: {
    flexGrow: 1,
    height: null,
    width: null,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    height: null,
    width: null,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    backgroundColor: 'transparent',
    zIndex: 100,
  },
});

export default Spinner;
