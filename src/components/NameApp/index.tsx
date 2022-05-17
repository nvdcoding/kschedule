import React from 'react';

import {
  StyleProp,
  StyleSheet,
} from 'react-native';
import {
  Block,
  Text,
} from 'src/components';
import Color from 'src/theme/Color';
import Font from 'src/theme/Font';

interface INameApp {
  size?: number;
  marginTop?: number;
  style?: StyleProp<any>;
}

const styles = StyleSheet.create({
  textTitle: {
    color: Color.RED_HOLDER,
    fontFamily: Font.font_bold_700,
  },

  textEdu: {
    fontFamily: Font.font_bold_700,
    color: Color.GREEN_HOLDER,
  },
});

const NameApp = ({size, marginTop, style}: INameApp) => {
  return (
    <Block
      marginTop={marginTop ? marginTop : 20}
      row
      alignSelf="center"
      style={style}>
      <Text style={styles.textTitle} size={size ? size : 50}>
        Go
      </Text>
      <Text style={styles.textEdu} size={size ? size : 50}>
        Edu
      </Text>
    </Block>
  );
};

export default NameApp;
