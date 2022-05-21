import React from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import Styles from 'src/base/common/Styles';
import {Block} from 'src/components';
import styles from './home.style';
import {isTablet} from 'src/base/common/Constants';
const SearchScreen = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={Styles.container}>
      <Block style={[styles.content, isTablet && styles.contentTablet]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerHome}>
            <Text style={styles.search}>{t('SEARCH_BY')}</Text>
          </View>
        </ScrollView>
      </Block>
    </SafeAreaView>
  );
};

export default SearchScreen;
