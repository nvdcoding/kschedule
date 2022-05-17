import deviceInfoModule from 'react-native-device-info';

import {createSlice} from '@reduxjs/toolkit';

export interface IAppState {
  language: string;
  isTablet: boolean;
  firstBoot: boolean;
  notify: boolean;
}

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    language: null,
    isTablet: deviceInfoModule.isTablet(),
    firstBoot: true,
    notify: false,
  },
  reducers: {
    changeLanguage(state, action) {
      return (state = {
        ...state,
        language: action.payload,
      });
    },
    actionChangeTablet(state, action) {
      return (state = {
        ...state,
        isTablet: action.payload,
      });
    },
    setNotifyFirstBoot(state, action) {
      return {
        ...state,
        notify: action.payload.notify,
        firstBoot: false,
      };
    },
  },
  extraReducers: builder => {
    // builder.addCase(loadAppData.pending, state => {
    //   state.booted = false;
    // });
  },
});

export const {changeLanguage, actionChangeTablet, setNotifyFirstBoot} =
  appSlice.actions;
export default appSlice.reducer;
