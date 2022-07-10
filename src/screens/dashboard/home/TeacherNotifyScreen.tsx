import React, { useState } from 'react';
import { notifyInvalid } from 'src/base/utils/Utils';
import { useTranslation } from 'react-i18next';
import {
    SafeAreaView,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Pressable,
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
import { ADD_NOTIFY_SCREEN } from 'src/navigation/screen';
const NotifiTeacher = ({ navigation }) => {
    const { t } = useTranslation();
    const infoUser = useSelector<IRootState, IUserState>(state => state.infoUser);

    const [password, setPassword] = useState(null);
    const [status, setStatus] = useState(infoUser.sync ? true : false);
    const [isLoading, setLoading] = useState(false);
    const [show, setShow] = useState([]);
    const [index, setIndex] = useState(-1);
    const handleShow = async (id) => {
        console.log(id);
        // setShow(show.map(e => {

        // }));
    };
    const handleChangeScreen = () => {
        navigation.navigate(ADD_NOTIFY_SCREEN);
    }
    return (
        <SafeAreaView style={Styles.container}>
            <Block style={[styles.content, isTablet && styles.contentTablet]}>
                <View>
                    <TouchableOpacity style={styles.ItemInfo} onPress={handleChangeScreen}>
                        <View><Text>Clcik</Text></View>
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>

                        <TouchableOpacity style={styles.ItemInfo} onPress={(key) => {
                            handleChangeScreen
                        }}>
                            <View style={styles.mainItem} >
                                <Icon
                                    name={'md-key-outline'}
                                    size={getSize.m(24)}
                                    color={Color.RED}
                                />
                                <View style={styles.blockPass}>
                                    <Text style={styles.changePassTitle}>Thông báo của giảng viên</Text>
                                    <Text style={styles.titlePassDes}>
                                        Ngày mai thi
                                    </Text>
                                </View>
                            </View>
                            <Icon
                                name={'ios-chevron-down-sharp'}
                                size={getSize.m(20)}
                                color={'#999999'}
                            />
                        </TouchableOpacity>
                        {index == 0 && (
                            <View style={styles.blockChangePass}>
                                <Text>Vip khoong</Text>
                            </View>
                        )}
                    </View>
                    <View>
                        <TouchableOpacity style={styles.ItemInfo} key={2} onPress={key => handleShow(key)}>
                            <View style={styles.mainItem}>
                                <Icon
                                    name={'md-key-outline'}
                                    size={getSize.m(24)}
                                    color={Color.RED}
                                />
                                <View style={styles.blockPass}>
                                    <Text style={styles.changePassTitle}>Nhúng2</Text>
                                    <Text style={styles.titlePassDes}>
                                        Ngày mai thi
                                    </Text>
                                </View>
                            </View>
                            <Icon
                                name={'ios-chevron-down-sharp'}
                                size={getSize.m(20)}
                                color={'#999999'}
                            />
                        </TouchableOpacity>
                        {show && (
                            <View style={styles.blockChangePass}>
                                <Text>Vip khoong 2</Text>
                            </View>
                        )}
                    </View>
                    <View>
                        <TouchableOpacity style={styles.ItemInfo} key={3} onPress={key => handleShow(key)}>
                            <View style={styles.mainItem}>
                                <Icon
                                    name={'md-key-outline'}
                                    size={getSize.m(24)}
                                    color={Color.RED}
                                />
                                <View style={styles.blockPass}>
                                    <Text style={styles.changePassTitle}>Nhúng 33</Text>
                                    <Text style={styles.titlePassDes}>
                                        Ngày mai thi
                                    </Text>
                                </View>
                            </View>
                            <Icon
                                name={'ios-chevron-down-sharp'}
                                size={getSize.m(20)}
                                color={'#999999'}
                            />
                        </TouchableOpacity>
                        {show && (
                            <Block>
                                <View style={styles.blockChangePass}>
                                    <Text>Vip khoong33</Text>
                                </View>
                            </Block>

                        )}

                    </View>

                </ScrollView>

            </Block>
            {isLoading && (
                <Spinner mode={'overlay'} size={'large'} color={Color.TEXT_PRIMARY} />
            )}

        </SafeAreaView>
        // List thông báo của teacher đó
        // 1 button thêm thông báo.ở cuối

    );
};

export default NotifiTeacher;
