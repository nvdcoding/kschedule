import React, {
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react';

import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {getIconComponent} from 'src/assets/icon';
import {getSize} from 'src/base/common/responsive';
import Styles from 'src/base/common/Styles';
import {
  Block,
  Text,
} from 'src/components';
import Color from 'src/theme/Color';
import Font from 'src/theme/Font';

const styles = StyleSheet.create({
  controlPage: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: getSize.m(50),
    marginTop: getSize.m(30),
  },

  btnBackPage: {
    width: getSize.m(32),
    height: getSize.m(32),
    borderRadius: getSize.m(16),
    backgroundColor: Color.BACKGROUND,
    ...Styles.centerNoFlex,
  },

  btnNextPage: {
    width: getSize.m(32),
    height: getSize.m(32),
    borderRadius: getSize.m(16),
    backgroundColor: Color.GREEN_HOLDER,
    ...Styles.centerNoFlex,
  },

  btnPage: {
    paddingHorizontal: getSize.m(8),
  },

  textPage: {
    fontFamily: Font.font_SVN_700,
    fontSize: getSize.m(13, 0.3),
    color: '#7A7A7A',
  },

  textPageActive: {
    color: Color.GREEN,
  },
});

const Icon = getIconComponent('goEdu');

const ControlPage = ({numberPage, handleChangePage, listPage}) => {
  const [listPageCurrent, setListPageCurrent] = useState<Array<number>>(
    listPage.slice(0, 5),
  );
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setListPageCurrent(listPage.slice(0, 5));
    setCurrentPage(1);
  }, [listPage]);

  const handlePage = page => {
    const leftPageNumber =
      page - 3 <= 0
        ? 0
        : numberPage - (page + 1) > 0
        ? page - 3
        : page - 3 - (page + 2 - numberPage);
    const rightPageNumber =
      page - 3 <= 0
        ? page + 2 - (page - 3)
        : page + 1 > numberPage
        ? numberPage
        : page + 2;
    setListPageCurrent(
      numberPage <= 5
        ? listPage.slice(0, 5)
        : listPage.slice(leftPageNumber, rightPageNumber),
    );
    handleChangePage(page);
    setCurrentPage(page);
  };

  const renderPage = useCallback(
    (item, index) => {
      const _handlePage = () => handlePage(item);
      return (
        <TouchableOpacity
          key={index}
          onPress={_handlePage}
          style={styles.btnPage}
          activeOpacity={0.5}>
          <Text
            style={
              (styles.textPage, currentPage === item && styles.textPageActive)
            }>
            {item}
          </Text>
        </TouchableOpacity>
      );
    },
    [currentPage, listPageCurrent],
  );

  const handleBackPage = () =>
    currentPage - 1 >= 1 && handlePage(currentPage - 1);

  const handleNextPage = () =>
    currentPage + 1 <= numberPage && handlePage(currentPage + 1);

  return (
    <Block style={styles.controlPage}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={handleBackPage}
        style={currentPage > 1 ? styles.btnNextPage : styles.btnBackPage}>
        <Icon
          name={'Caret-left'}
          size={getSize.m(24)}
          color={currentPage > 1 ? Color.WHITE : Color.BLACK}
        />
      </TouchableOpacity>
      {listPageCurrent.map(renderPage)}
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={handleNextPage}
        style={
          currentPage >= numberPage ? styles.btnBackPage : styles.btnNextPage
        }>
        <Icon
          name={'Caret-right'}
          size={getSize.m(24)}
          color={currentPage >= numberPage ? Color.BLACK : Color.WHITE}
        />
      </TouchableOpacity>
    </Block>
  );
};

export default memo(ControlPage);
