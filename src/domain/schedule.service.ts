import base64 from 'react-native-base64';
import { JWT_KEY, URL_MAIN } from 'src/base/common/Constants';
import api from 'src/base/domain/api';
import { IRegisterAccount } from './local/IRegisterAccount';
import Helper from '../base/utils/helper';

export default class ScheduleService {
    setSchedule(password: string): Promise<any> {
        return api('api/v1/schedule', { password }, {
            method: 'POST',
        });
    }
    async getSchedule(): Promise<any> {
        const accessToken = await Helper.getDataStored(JWT_KEY);
        return api('api/v1/schedule', {}, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            method: "GET"
        });
    }
    // login(username: string, password: string): Promise<any> {
    //   return api('account/v1/authorize/token', null, {
    //     method: 'GET',
    //     headers: {
    //       Authorization: `Basic ${base64.encode(`${username}:${password}`)}`,
    //     },
    //   });
    // }

}
