import {RESPONSE_CODES} from 'src/base/common/Constants';

export default class AppError {
  code: number;
  messeger: string;

  constructor(code: number, messeger: string) {
    this.code = code;
    this.messeger = messeger;
  }
}

export const ERROR_NETWORK = new AppError(
  RESPONSE_CODES.NETWORK_ERROR,
  'Oops, vui lòng kiểm tra lại kết nối.',
);
