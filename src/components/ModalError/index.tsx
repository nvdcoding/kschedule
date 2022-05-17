import React, {memo} from 'react';

import {useTranslation} from 'react-i18next';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import CloseIcon from 'src/assets/icon/CloseIcon';
import {isTablet} from 'src/base/common/Constants';
import {getSize} from 'src/base/common/responsive';
import Styles from 'src/base/common/Styles';
import {
  Block,
  Text,
} from 'src/components';
import Color from 'src/theme/Color';
import Font from 'src/theme/Font';

const styles = StyleSheet.create({
  containerModal: {
    paddingHorizontal: getSize.m(30),
    backgroundColor: Color.BLOCK_GRAY,
    borderRadius: getSize.m(20),
    width: isTablet ? getSize.s(280) : null,
    paddingBottom: getSize.m(30),
    paddingTop: getSize.m(20),
    alignSelf: isTablet ? 'center' : 'stretch',
  },

  titleModal: {
    color: Color.WHITE,
    fontFamily: Font.font_SVN_700,
    fontSize: getSize.m(15, 0.3),
    marginTop: getSize.m(10),
    textAlign: 'center',
  },

  noteModal: {
    fontFamily: Font.font_SVN_400,
    fontSize: getSize.m(13, 0.3),
    color: '#BCE1C6',
    marginTop: getSize.m(10),
    textAlign: 'center',
  },

  btnModal: {
    height: getSize.m(38),
    backgroundColor: Color.GREEN,
    borderRadius: getSize.m(10),
    ...Styles.centerNoFlex,
    marginTop: getSize.m(40),
  },

  textBtnModal: {
    fontFamily: Font.font_semi_bold_600,
    color: Color.WHITE,
    fontSize: getSize.m(12, 0.3),
  },
});

const ModalErrorComponent = ({handleClose, isVisible, error}) => {
  const {t} = useTranslation();
  return (
    <ReactNativeModal
      onBackdropPress={handleClose}
      isVisible={isVisible}
      backdropOpacity={0.2}>
      <Block style={styles.containerModal}>
        <Block alignCenter>
          <CloseIcon />
          <Text style={styles.titleModal}>{t('ERROR_REGISTER')}</Text>
          <Text style={styles.noteModal}>{error}</Text>
        </Block>
        <TouchableOpacity
          onPress={handleClose}
          activeOpacity={0.5}
          style={styles.btnModal}>
          <Text style={styles.textBtnModal}>{t('UNDERSTOOD')}</Text>
        </TouchableOpacity>
      </Block>
    </ReactNativeModal>
  );
};

export default memo(ModalErrorComponent);
