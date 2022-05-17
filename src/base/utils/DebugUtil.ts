export const debug = (msg, data?) => {
  if (__DEV__) {
    console.log(msg, data);
  }
};

export const DEBUG_API = true && __DEV__;
export const DEBUG_CHECK_IN = false && __DEV__;
export const DEBUG_INTERSTITIAL = false && __DEV__;
