import {Platform} from 'react-native';
import deviceInfoModule from 'react-native-device-info';

export const AppInfo = require('../../../app.json');

export const IS_IOS = Platform.OS === 'ios';

export const AVATAR_DEFAULT =
  'https://i.pinimg.com/originals/e6/fe/5b/e6fe5b40296509fb8e2c00cd16173d92.jpg';

const CODE_PUSH_KEY_DEV = IS_IOS ? 'ádf' : 'adsf';

const CODE_PUSH_KEY_PROP = IS_IOS ? 'ádf-OzO' : 'àádfasd';

export const CODE_PUSH_KEY = __DEV__ ? CODE_PUSH_KEY_DEV : CODE_PUSH_KEY_PROP;

export const RESPONSE_CODES = {
  OK: 0,
  CANCEL: -100,
  AUTH_ERROR: 102,
  NETWORK_ERROR: -1,
  ERROR_REWARDED_DAILY: 110,
  ERROR_EMAIL_USED: 133,
  ERROR_PHONE_USED: 121,
  ERROR_CODE_SENT_TO_MAIL: 132,
  TOKEN_EXPRIED: 401,
  SERVER_ERROR: 500,
};

export const STORAGE_KEYS = {
  USER_TOKEN: 'user_token',
};

export const JWT_KEY = 'JWT_KEY_GO_EDU';

export const isTablet = deviceInfoModule.isTablet();

export const VERSION_APP = deviceInfoModule.getVersion();
export const DEVICE_ID = deviceInfoModule.getDeviceId();

export const VERIFY_URL = 'http://dev.learn.goedu.asia/active-user';
export const URL_MAIN = 'http://dev.learn.goedu.asia/';

export const CODE_PUSH_PRODUCT = !IS_IOS
  ? '6DWnM7ipQWLFrTdagFfLz5GOLP-mVUUdsfdf'
  : '2ohO08i_cibwO4LOcBdfsgOEnNnl';

export const CODE_PUSH_DEV = IS_IOS
  ? '2ohO08i_cidfdMFX6tRoBHkHgOEnNnl'
  : 'uEzSK94zC4hjFdfHs-Y9n9g681k5G6';
