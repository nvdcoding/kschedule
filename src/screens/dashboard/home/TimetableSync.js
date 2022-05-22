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
import styles from './home.style';
import {isTablet} from 'src/base/common/Constants';
import InputComponent from '../../auth/components/InputComponent';
import Color from 'src/theme/Color';

const TimetableSync = () => {
  const {t} = useTranslation();
  const [password, setPassword] = useState(null);
  const [status, setStatus] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const handleSync = async () => {};
  return (
    <SafeAreaView style={Styles.container}>
      <Block style={[styles.content, isTablet && styles.contentTablet]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerHome}>
            <Text style={styles.timetableTitle}>{t('TIMETABLE_SYNC')}</Text>
            <InputComponent
              title={t('PASSWORD_CODE')}
              secureTextEntry
              placeholder={t('ENTER_PASSWORD')}
              value={password}
              onChangeText={setPassword}
            />
            <Block style={styles.status}>
              <Text style={styles.statusTitle}>{t('STATUS')}:</Text>
              {status ? (
                <Text style={styles.statusY}>Đồng bộ</Text>
              ) : (
                <Text style={styles.statusN}>Chưa đồng bộ</Text>
              )}
            </Block>
            <Block style={styles.Notes}>
              <Text style={styles.notesTitle}>{t('NOTE')}</Text>
              <Text style={styles.notesDes}>{t('NOTE_TEXT')}</Text>
            </Block>
          </View>
          <Block marginHorizontal={30}>
            <TouchableOpacity
              style={styles.btnLogin}
              activeOpacity={0.5}
              onPress={handleSync}>
              <Text style={styles.textLogin}>{t('SYNC_TIMETABLE_BTN')}</Text>
            </TouchableOpacity>
          </Block>
        </ScrollView>
      </Block>
      {isLoading && (
        <Spinner mode={'overlay'} size={'large'} color={Color.TEXT_PRIMARY} />
      )}
    </SafeAreaView>
  );
};

export default TimetableSync;