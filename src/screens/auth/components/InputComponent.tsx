import React, {memo, useState} from 'react';

import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {getIconComponent} from 'src/assets/icon';
import {getSize} from 'src/base/common/responsive';
import {Block, Text} from 'src/components';
import Color from 'src/theme/Color';
import Font from 'src/theme/Font';

import {IInput} from '../types';

const Icon = getIconComponent('goEdu');

const styles = StyleSheet.create({
  title: {
    color: '#9E9E9E',
    fontFamily: Font.font_SVN_400,
    fontSize: getSize.m(15, 0.3),
  },

  textInput: {
    borderBottomColor: Color.TEXT_PRIMARY,
    borderBottomWidth: getSize.m(1),
    color: Color.BLACK,
    fontFamily: Font.font_SVN_400,
    fontSize: getSize.m(15, 0.3),
    paddingBottom: getSize.m(6),
  },

  formInvalid: {
    borderBottomColor: Color.RED,
  },

  btnShowPass: {
    position: 'absolute',
    bottom: getSize.m(9),
    right: getSize.m(4),
  },

  paddingInput: {
    paddingRight: getSize.m(35),
  },
});

const InputComponent = ({
  title,
  invalid,
  value,
  onChangeText,
  secureTextEntry,
  placeholder,
  marginBottom,
}: IInput) => {
  const [showPass, setShowPass] = useState<boolean>(
    secureTextEntry ? true : false,
  );
  const handleShowPass = () => setShowPass(!showPass);
  return (
    <Block marginBottom={marginBottom ? marginBottom : 10}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholderTextColor={'#9E9E9E90'}
        style={[
          styles.textInput,
          invalid && styles.formInvalid,
          secureTextEntry && styles.paddingInput,
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={showPass}
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={handleShowPass} style={styles.btnShowPass}>
          <Icon name={'viewer-icon'} size={getSize.m(14)} color={Color.GRAY} />
        </TouchableOpacity>
      )}
    </Block>
  );
};

export default memo(InputComponent);
