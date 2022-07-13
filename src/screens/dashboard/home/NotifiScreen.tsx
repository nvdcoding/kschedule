import React, {useCallback, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import Styles from 'src/base/common/Styles';
import {debug} from 'src/base/utils/DebugUtil';
import {keyExtractor} from 'src/base/utils/Utils';
import {Block, Spinner, Text} from 'src/components';
import ScheduleService from 'src/domain/schedule.service';
import {IUserState} from 'src/redux/slices/accountSlice';
import {IRootState} from 'src/redux/store';
import Color from 'src/theme/Color';
import ItemNotifyComponent from './components/ItemNotifyComponent';
import styles from './home.style';

const Notifi = () => {
  const {t} = useTranslation();
  const infoUser = useSelector<IRootState, IUserState>(state => state.infoUser);
  const scheduleService = new ScheduleService();
  const [isLoading, setLoading] = useState(false);
  const [notifyData, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const {data} = await scheduleService.getNotifications();
        debug('adf>>>', JSON.stringify(data));
        data.code === '200' && setData(data.data.data);
        setLoading(false);
        console.log(notifyData);
      } catch (error) {
        setLoading(false);
      }
    })();
  }, [notifyData]);

  const renderNotify = useCallback(({item}) => {
    return <ItemNotifyComponent item={item} />;
  }, []);

  return (
    <SafeAreaView style={Styles.container}>
      <Text style={styles.tabBar}>Thông báo</Text>
      <FlatList
        data={notifyData}
        keyExtractor={keyExtractor}
        renderItem={renderNotify}
      />
      {isLoading && (
        <Spinner mode={'overlay'} size={'large'} color={Color.TEXT_PRIMARY} />
      )}
    </SafeAreaView>
  );
};

export default Notifi;
