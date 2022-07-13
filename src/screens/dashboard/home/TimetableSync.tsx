import React, {useState} from 'react';
import {notifyInvalid} from 'src/base/utils/Utils';
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
import ScheduleService from 'src/domain/schedule.service';
import {useSelector} from 'react-redux';
import {IUserState} from 'src/redux/slices/accountSlice';
import {IRootState} from 'src/redux/store';
const TimetableSync = () => {
  const {t} = useTranslation();
  const infoUser = useSelector<IRootState, IUserState>(state => state.infoUser);

  const [password, setPassword] = useState(null);
  const [status, setStatus] = useState(infoUser.sync ? true : false);
  const [isLoading, setLoading] = useState(false);
  const handleSync = async () => {
    try {
      if (!password) {
        throw t('NOT_ENTER_PASSWORD');
      }
      setLoading(true);
      const scheduleService = new ScheduleService();
      const {data} = await scheduleService.setSchedule(password);
      if (data.data.statusCode !== 200) {
        throw data.data.message;
        // throw data.description;
      }
      if (data.data.statusCode === 200) {
        throw 'Đồng bộ thời khóa biểu thành công!';
      }
      setStatus(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      notifyInvalid(`${error}`);
    }
  };

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
              editable
            />
            <Block style={styles.status}>
              <Text style={styles.statusTitle}>{t('STATUS')}:</Text>
              {status ? (
                <Text style={styles.statusY}>Đã đồng bộ</Text>
              ) : (
                <Text style={styles.statusN}>Chưa đồng bộ</Text>
              )}
            </Block>
            <Block style={styles.Notes}>
              <Text style={styles.notesTitle}>{t('NOTE')}</Text>
              <Text style={styles.notesDes}>{t('NOTE_TEXT')}</Text>
            </Block>
          </View>
        </ScrollView>
      </Block>
      <Block
        marginHorizontal={30}
        style={{
          marginBottom: 25,
        }}>
        <TouchableOpacity
          style={styles.btnLogin}
          activeOpacity={0.5}
          onPress={handleSync}>
          <Text style={styles.textLogin}>{t('SYNC_TIMETABLE_BTN')}</Text>
        </TouchableOpacity>
      </Block>
      {isLoading && (
        <Spinner mode={'overlay'} size={'large'} color={Color.TEXT_PRIMARY} />
      )}
    </SafeAreaView>
  );
};

export default TimetableSync;
