import axios, { AxiosPromise } from 'axios';
import {
  RESPONSE_CODES,
  STORAGE_KEYS,
} from 'src/base/common/Constants';
import AppError from 'src/base/domain/AppError';
import ErrorUtil from 'src/base/domain/ErrorUtil';
import { getData } from 'src/base/utils/AsyncStorageUtils';
import { addExtendHeader } from 'src/base/utils/ParamsUtil';

import { debug } from '../utils/DebugUtil';

export default class ServiceApi {
  static routes = [];

  baseUrl: string;
  headers: any;

  constructor(baseUrl = '', headers = {}) {
    this.baseUrl = baseUrl;
    getData(STORAGE_KEYS.USER_TOKEN).then(storeData => {
      if (storeData.success) {
        addExtendHeader({
          Authorization: `Bearer ${storeData.data}`,
        });
      }
    });

    this.headers = {
      ...headers,
    };
  }

  injectHeader(header = {}) {
    this.headers = {
      ...this.headers,
      ...header,
    };
  }

  fetch(path, method, data, isQuery): AxiosPromise {
    let route = `${this.baseUrl}${path}`;
    if (isQuery && data) {
      route = `${route}${data}`;
      data = undefined;
    }
    debug('service.api.ts < request route > ===> ', route);
    debug('service.api.ts < request headers > ===> ', this.headers);
    let options = {
      method,
      timeout: 15000,
      url: route,
      headers: this.headers,
    };
    if (data) {
      if (data instanceof FormData) {
        Object.assign(options, { data: data });
      } else if (data instanceof URLSearchParams) {
        Object.assign(options, { body: data });
      } else {
        Object.assign(options, { data: data });
      }
      debug('service.api.ts < request data > ===> ', data);
    }
    return axios(options);
  }

  GET<T>(route, query?): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.fetch(route, 'GET', query, true)
        .then(response => {
          const data = response.data;
          if (data.er && data.er !== RESPONSE_CODES.OK) {
            reject(new AppError(data.er, data.msg));
            return;
          }
          resolve(data.data);
        })
        .catch(error => {
          if (error.response && error.response.status) {
            reject(new AppError(error.response.status, error.message));
          } else {
            reject(
              new AppError(
                RESPONSE_CODES.NETWORK_ERROR,
                ErrorUtil.withCode(RESPONSE_CODES.NETWORK_ERROR),
              ),
            );
          }
        });
    });
  }

  POST<T>(route, body?): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.fetch(route, 'POST', body, false)
        .then(response => {
          const data = response.data;
          if (data.er && data.er !== RESPONSE_CODES.OK) {
            debug('service.api.ts < data.er > ===> ', data.er);
            reject(new AppError(data.er, data.msg));
            return;
          }
          if (data.er === undefined) {
            resolve(data);
            return;
          }
          resolve(data.data);
        })
        .catch(error => {
          debug('service.api.ts <  > ===> ', error);
          if (error.response && error.response.status) {
            const errorMsg = error.response.data?.error;
            if (errorMsg) {
              reject(
                new AppError(
                  error.response.status,
                  errorMsg ? errorMsg : error.response.data,
                ),
              );
              return;
            }
            const er = error.response.data?.er;
            const msg = error.response.data?.msg;
            if (er) {
              if (er === RESPONSE_CODES.TOKEN_EXPRIED) {
                return;
              }
              reject(new AppError(er, ErrorUtil.withCode(er) || msg));
              return;
            }

            reject(
              new AppError(
                RESPONSE_CODES.SERVER_ERROR,
                ErrorUtil.withCode(RESPONSE_CODES.SERVER_ERROR),
              ),
            );
          } else {
            reject(
              new AppError(
                RESPONSE_CODES.NETWORK_ERROR,
                ErrorUtil.withCode(RESPONSE_CODES.NETWORK_ERROR),
              ),
            );
          }
        });
    });
  }
}
