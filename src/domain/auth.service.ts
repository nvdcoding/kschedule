import {JWT_KEY, URL_MAIN} from 'src/base/common/Constants';
import api from 'src/base/domain/api';
import Helper from 'src/base/utils/helper';
import {IRegisterAccount} from './local/IRegisterAccount';

export default class AuthService {
  login(studentCode: string, password: string): Promise<any> {
    return api(
      'api/v1/auth/login',
      {studentCode, password},
      {
        method: 'POST',
      },
    );
  }
  teacherLogin(email: string, password: string): Promise<any> {
    return api(
      'api/v1/auth/teacher/login',
      {email, password},
      {
        method: 'POST',
      },
    );
  }
  // login(username: string, password: string): Promise<any> {
  //   return api('account/v1/authorize/token', null, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Basic ${base64.encode(`${username}:${password}`)}`,
  //     },
  //   });
  // }

  registerAccount({
    studentCode,
    name,
    email,
    password,
    otp,
  }: IRegisterAccount): Promise<any> {
    return api('/api/v1/auth/register', {
      studentCode,
      name,
      email,
      password,
      otp,
    });
  }

  sendOtp({email, studentCode}): Promise<any> {
    return api(
      'api/v1/auth/send-otp',
      {
        email,
        studentCode,
      },
      {method: 'POST'},
    );
  }
  async changePass(password, newPassword, reNewPassword): Promise<any> {
    const accessToken = await Helper.getDataStored(JWT_KEY);
    return api(
      'api/v1/schedule/personal-schedule',
      {
        password,
        newPassword,
        reNewPassword,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        method: 'POST',
      },
    );
  }

  getInfoUser(): Promise<any> {
    return api('api/v1/auth/me', null, {method: 'GET'});
  }

  getInfoTeacher(): Promise<any> {
    return api('api/v1/auth/teacher/me', null, {method: 'GET'});
  }

  changePassword(
    password: string,
    rePassword: string,
    newPassword?: string,
  ): Promise<any> {
    return api('api/v1/auth/change-password', {
      password,
      rePassword,
      newPassword,
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
