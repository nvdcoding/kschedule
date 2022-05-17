export const makeParams = (params = {}, isQuery = true): string | FormData => {
  const _params = {
    ...extendParams,
    ...params,
  };

  if (isQuery) {
    return jsonToQuery(_params);
  }
  const formData = new FormData();
  for (let key in _params) {
    formData.append(key, _params[key]);
  }
  return formData;
};

export const makeFormUrlEncoded = (params = {}) => {
  const _params = {
    ...params,
  };

  const form_data = new URLSearchParams();
  for (let key in _params) {
    form_data.append(key, `${_params[key]}`);
  }
  return form_data;
};

export const jsonToQuery = json => {
  return (
    '?' +
    Object.keys(json)
      .map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
      })
      .join('&')
  );
};

let extendParams = {};

export const addExtendParams = params => {
  extendParams = {
    ...extendParams,
    ...params,
  };
};

export let extendHeader = {};

export const addExtendHeader = params => {
  extendHeader = {
    ...extendHeader,
    ...params,
  };
};

export const makeRaw = (params = {}) => {
  return {
    ...extendParams,
    ...params,
  };
};

export const ExtendParams = extendParams;
