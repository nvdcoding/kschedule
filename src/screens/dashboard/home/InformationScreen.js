import React, {useState} from 'react';

import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from 'src/base/common/Styles';
import {Block, Image} from 'src/components';
import {Images} from 'src/assets/images';
import styles from './home.style';
import {isTablet} from 'src/base/common/Constants';
import Color from 'src/theme/Color';
import {getSize} from 'src/base/common/responsive';
import {LIVE_CLASS_SCREEN} from 'src/navigation/screen';

const InformationScreen = ({navigation}) => {
  const {t} = useTranslation();
  const [avt, setAvt] = useState(Images.AVATAR_DEFAULT);
  const changeAVT = () => {
    console.log('state changed!');
    setAvt(Images.IMG_LOGO);
  };
  const handleChangeScreen = () => {
    console.log('state changed!');
    navigation.navigate(LIVE_CLASS_SCREEN);
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Block style={[styles.content, isTablet && styles.contentTablet]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={styles.btnBack}
            activeOpacity={0.5}
            onPress={navigation.goBack}>
            <Icon
              name={'arrow-back-outline'}
              size={getSize.m(24)}
              color={Color.RED}
            />
          </TouchableOpacity>
          <View style={styles.containerHome}>
            <View style={styles.avtUser} onPress={changeAVT}>
              <Image source={avt} style={styles.avtImg} />
              <Text style={styles.textAvt}>Lam Lam Mai</Text>
            </View>
            <Block style={styles.ListInfo}>
              <Block style={styles.ItemInfo} onPress={handleChangeScreen}>
                <View style={styles.mainItem}>
                  <Icon
                    name={'person-circle'}
                    size={getSize.m(24)}
                    color={Color.BLUE_HOLDER}
                  />
                  <Text style={styles.settingUser}>{t('INFORMATION')}</Text>
                </View>
                <Icon
                  name={'chevron-forward-sharp'}
                  size={getSize.m(24)}
                  color={'#CACDCF'}
                />
              </Block>
              <Block style={styles.ItemInfo}>
                <View style={styles.mainItem}>
                  <Icon name={'key'} size={getSize.m(24)} color={'#F1EF4C'} />
                  <Text style={styles.settingUser}>{t('SECURITY')}</Text>
                </View>
                <Icon
                  name={'chevron-forward-sharp'}
                  size={getSize.m(24)}
                  color={'#CACDCF'}
                />
              </Block>
              <Block style={styles.ItemInfo}>
                <View style={styles.mainItem}>
                  <Icon
                    name={'language'}
                    size={getSize.m(24)}
                    color={'#51B3F3'}
                  />
                  <Text style={styles.settingUser}>{t('LANGUAGE')}</Text>
                </View>
              </Block>
              <Block style={styles.ItemInfo}>
                <View style={styles.mainItem}>
                  <Icon
                    name={'power-outline'}
                    size={getSize.m(24)}
                    color={Color.RED}
                  />
                  <Text style={styles.settingUser}>{t('SIGN-OUT')}</Text>
                </View>
              </Block>
            </Block>
          </View>
        </ScrollView>
      </Block>
    </SafeAreaView>
  );
};

export default InformationScreen;
