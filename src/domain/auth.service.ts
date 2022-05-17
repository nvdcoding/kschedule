import base64 from 'react-native-base64';
import {URL_MAIN} from 'src/base/common/Constants';
import api from 'src/base/domain/api';

import {IRegisterAccount} from './local/IRegisterAccount';

export default class AuthService {
  login(username: string, password: string): Promise<any> {
    return api('account/v1/authorize/token', null, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${base64.encode(`${username}:${password}`)}`,
      },
    });
  }

  registerAccount({
    job,
    source,
    firstName,
    lastName,
    mobile,
    email,
    password,
    verifyUrl,
    fullName = '',
  }: IRegisterAccount): Promise<any> {
    return api('account/v1/anonymous/register/user', {
      job,
      source,
      firstName,
      lastName,
      mobile,
      email,
      password,
      verifyUrl,
      fullName,
    });
  }

  getInfoUser(): Promise<any> {
    return api('admin/account/v1/user/info', null, {method: 'GET'});
  }

  changePassword(
    oldPassword: string,
    password: string,
    userName?: string,
  ): Promise<any> {
    return api('admin/account/v1/user/password', {
      oldPassword,
      password,
      userName,
    });
  }

  updateProfile(
    job: string,
    address: string,
    mobile: string,
    firstName: string,
    lastName: string,
    fullName?: string,
  ): Promise<any> {
    return api('/admin/account/v1/user/update/profile', {
      fullName,
      job,
      address,
      mobile,
      firstName,
      lastName,
    });
  }

  resetPassWord(
    email: string,
    url: string = URL_MAIN + 'change-pass',
  ): Promise<any> {
    return api('admin/account/v1/user/reset/password', {email, url});
  }

  changePasswordOtp(password: string, token: string): Promise<any> {
    return api('admin/account/v1/user/update/otp-password', {password, token});
  }
}
