import {Alert, Linking, PermissionsAndroid, ToastAndroid} from 'react-native';
import {IS_IOS} from '../common/Constants';
import {t} from 'i18next';

export const keyExtractor = (item, index) => 'item_' + item.id + '_' + index;

export const notifyInvalid = message => {
  IS_IOS
    ? alertMsg(message)
    : ToastAndroid.showWithGravityAndOffset(
        message,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        0,
        50,
      );
};

export const alert = (
  message: string,
  action: string,
  onPressed = undefined,
) => {
  Alert.alert(
    '',
    message,
    [
      {
        text: action,
        onPress: () => {
          onPressed && onPressed();
        },
        style: 'cancel',
      },
    ],
    {cancelable: false},
  );
};

export const alertMsg = (message: string) => {
  Alert.alert(
    '',
    message,
    [
      {
        text: 'OK',
        style: 'cancel',
      },
    ],
    {cancelable: false},
  );
};

export const showComfirm = (body, action, onComfirm) => {
  Alert.alert(
    '',
    body,
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: action,
        onPress: () => onComfirm(),
      },
    ],
    {cancelable: false},
  );
};

export const openDialog = (title, message, confirmText, rejectText?) => {
  return new Promise((resolve, reject) => {
    Alert.alert(
      title ? title : '',
      message ? message : '',
      [
        rejectText && {
          text: rejectText,
          onPress: () => {
            reject();
          },
        },
        confirmText && {
          text: confirmText,
          onPress: () => {
            resolve('');
          },
        },
      ],
      {cancelable: true},
    );
  });
};

export const textConverter = str => {
  str = str.replace(/\s/g, '');
  str = str.trim();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
  str = str.replace(/Đ/g, 'D');
  str = str.toLowerCase();
  return str;
};

export const languageFromCode = code => {
  switch (code) {
    case 'en':
      return 'English';
    case 'vi':
      return 'Vietnamese';
    default:
      return 'Unknown';
  }
};

export const hasAndroidPermissionSaveVideo = async () => {
  const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }
  const status = await PermissionsAndroid.request(permission);
  return status === 'granted';
};

export const convertTimestamp = (
  timestamp,
  isFull = true,
  onlyShowDate = false,
) => {
  const currentDate = new Date();
  const a = new Date(Number(timestamp));
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours() !== 12 ? a.getHours() % 12 : 12;
  const min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
  const session = a.getHours() < 12 ? 'a.m' : 'p.m';
  if (onlyShowDate) {
    return date + '/' + month + '/' + year;
  }
  if (isFull) {
    return (
      hour + ':' + min + ' ' + session + ' - ' + date + '/' + month + '/' + year
    );
  } else {
    if (currentDate.getTime() - timestamp <= 86400000) {
      return hour + ':' + min + ' ' + session;
    } else if (currentDate.getFullYear() === year) {
      return date + '/' + month;
    } else {
      return date + '/' + month + '/' + year;
    }
  }
};

export const decimalAdjust = (type, value, exp) => {
  // If the exp is undefined or zero...
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  // If the value is not a number or the exp is not an integer...
  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }
  // Shift
  value = value.toString().split('e');
  value = Math[type](+(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp)));
  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? +value[1] + exp : exp));
};

export function kFormatter(num: number) {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num;
}

export const compoundLinkImg = (link: string) => {
  return link ? (link.indexOf('https') === -1 ? `https:${link}` : link) : '';
};

export const formatTime = (time = 0, total = 0) => {
  time = Math.min(Math.max(total - time, 0), total);

  const formattedMinutes = Math.floor(time / 60).toFixed(0);
  const formattedSeconds = Math.floor(time % 60).toFixed(0);

  return `${formattedMinutes}:${
    +formattedSeconds < 10 ? '0' + formattedSeconds : formattedSeconds
  }`;
};

export const openLink = async (link: string, translate?) => {
  const supported = await Linking.canOpenURL(link);
  if (supported) {
    await Linking.openURL(link);
  } else {
    notifyInvalid(translate ? translate('LINKING_ERROR') : t('LINKING_ERROR'));
  }
};

export const formatListCourse = (listCourse: Array<any>) => {
  const lengthListCourse = listCourse.length;
  if (lengthListCourse % 3 === 0) {
    return listCourse;
  } else {
    const number = lengthListCourse - Math.floor(lengthListCourse / 3) * 3;
    return number === 1 ? [...listCourse, '', ''] : [...listCourse, ''];
  }
};
