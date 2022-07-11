import React, { useEffect, useState } from 'react';
import { notifyInvalid } from 'src/base/utils/Utils';
import { useTranslation } from 'react-i18next';
import {
    SafeAreaView,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Styles from 'src/base/common/Styles';
import { Block, Spinner } from 'src/components';
import styles from './home.style';
import * as securityStyles from '../user/security/security.style';
import { isTablet } from 'src/base/common/Constants';
import InputComponent from '../../auth/components/InputComponent';
import Color from 'src/theme/Color';
import ScheduleService from 'src/domain/schedule.service';
import { useSelector } from 'react-redux';
import { IUserState } from 'src/redux/slices/accountSlice';
import { IRootState } from 'src/redux/store';
import Icon from 'react-native-vector-icons/Ionicons';
import { getSize } from 'src/base/common/responsive';
import { Value } from 'react-native-reanimated';
const Notifi = () => {
    const { t } = useTranslation();
    const infoUser = useSelector<IRootState, IUserState>(state => state.infoUser);
    const scheduleService = new ScheduleService();
    const [isLoading, setLoading] = useState(false);
    const [show, setShow] = useState([]);
    const [index, setIndex] = useState([]);
    const [data, setData] = useState([]);
    const [ele, setEle] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const eles = [];
            const res = await scheduleService.getNotifications();
            setData(res.data.data.data);
            setIndex(new Array(data.length).fill(false));
            for (let i = 0; i < data.length; i++) {
                eles.push(
                    <View>
                        <TouchableOpacity style={styles.ItemInfo} onPress={(key) => { }}>
                            <View style={styles.mainItem} >
                                <Icon
                                    name={'md-key-outline'}
                                    size={getSize.m(24)}
                                    color={Color.RED}
                                />
                                <View style={styles.blockPass}>
                                    <Text style={styles.changePassTitle}>{data[i].className} - {data[i].teacher}</Text>
                                    <Text style={styles.titlePassDes}>
                                        {data[i].title} - {data[i].date}
                                    </Text>
                                    <Text style={styles.titlePassDes}>
                                        {data[i].content}
                                    </Text>
                                    {index[0] ? (
                                        <View style={styles.blockChangePass}>
                                            <Text>{data[i].content}</Text>
                                        </View>
                                    ) : null}
                                </View>
                            </View>
                            <Icon
                                name={'ios-chevron-down-sharp'}
                                size={getSize.m(20)}
                                color={'#999999'}
                            />
                        </TouchableOpacity>
                    </View>
                )
            }
            setEle(eles);
        }
        fetchData();
        // console.log("40lll", data);
        // console.log(index.length);
    }, [data]);

    return (
        <SafeAreaView style={Styles.container}>
            <Block style={[styles.content, isTablet && styles.contentTablet]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {ele}
                </ScrollView>
            </Block>
            {
                isLoading && (
                    <Spinner mode={'overlay'} size={'large'} color={Color.TEXT_PRIMARY} />
                )
            }
        </SafeAreaView >
    );
};

export default Notifi;
