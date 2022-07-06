import { createSlice } from '@reduxjs/toolkit';
import { JWT_KEY } from 'src/base/common/Constants';
import Helper from 'src/base/utils/helper';

export interface IUserState {
  isLogged: boolean;
  id: number;
  studentCode: string;
  name: string;
  email: string;
  birthday: string;
  phone: string;
  avatar: string;
  sync: string;
  status: string;
  role: number;
}

const initialState: IUserState = {
  isLogged: false,
  id: 0,
  studentCode: '',
  name: '',
  email: '',
  birthday: null,
  phone: null,
  avatar: null,
  sync: '',
  status: '',
  role: 0,
};

export const accountSlice = createSlice({
  name: 'infoUser',
  initialState,
  reducers: {
    setAccount(state, action) {
      return (state = {
        ...state,
        ...action.payload,
        isLogged: true,
      });
    },
    actionLogout() {
      Helper.storeData(JWT_KEY, '');
      return initialState;
    },
  },
});

export const { setAccount, actionLogout } = accountSlice.actions;
export default accountSlice.reducer;
