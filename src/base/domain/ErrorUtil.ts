import {RESPONSE_CODES} from 'src/base/common/Constants';

export const ERROR_NETWORK = -1;
export const ERROR_USERNAME_EMPTY = -2;
export const ERROR_PASSWORD_EMPTY = -3;
export const ERROR_FCM_TOKEN_NOT_YET = -4;

export const ERROR_REWARDED_DAILY = 102;

const ErrorUtil = {
  withCode(code: number): string {
    switch (code) {
      //common
      case ERROR_NETWORK:
        return 'Oops, vui lòng kiểm tra lại kết nối.';
      case RESPONSE_CODES.TOKEN_EXPRIED:
        return 'Phiên đăng nhập của bạn đã hết hạn.';
      case RESPONSE_CODES.ERROR_CODE_SENT_TO_MAIL:
        return 'Mã xác nhận đã được gửi tới email của bạn. Nếu chưa nhận được vui lòng gửi lại xác nhận sau 5 phút';
      case RESPONSE_CODES.SERVER_ERROR:
        return 'Hệ thống đang bảo trì tính năng. Vui lòng quay lại sau.';
      default:
        return undefined;
    }
  },
};

export default ErrorUtil;
