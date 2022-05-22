import React, {useState} from 'react';

import {useTranslation} from 'react-i18next';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Styles from 'src/base/common/Styles';
import {Block, Spinner} from 'src/components';
import styles from './information.style';
import {isTablet} from 'src/base/common/Constants';
import InputComponent from '../../../auth/components/InputComponent';
import Color from 'src/theme/Color';

const ChangeSecurityScreen = () => {
  const {t} = useTranslation();
  const [password, setPassword] = useState(null);
  const [status, setStatus] = useState(false);
  const [isLoading, setLoading] = useState(false);
  return (
    <SafeAreaView style={Styles.container}>
      <Block style={[styles.content, isTablet && styles.contentTablet]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerHome}>
            <Text style={styles.timetableTitle}>Bảo mật mật khẩu</Text>
          </View>
        </ScrollView>
      </Block>
      {isLoading && (
        <Spinner mode={'overlay'} size={'large'} color={Color.TEXT_PRIMARY} />
      )}
    </SafeAreaView>
  );
};

export default ChangeSecurityScreen;
