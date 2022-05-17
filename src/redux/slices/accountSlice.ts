import {createSlice} from '@reduxjs/toolkit';
import {JWT_KEY} from 'src/base/common/Constants';
import Helper from 'src/base/utils/helper';

export interface IUserState {
  isLogged: boolean;
  userId: number;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  address: string;
  age: string;
  sex: string;
  bod: string;
  jobTitle: string;
  cTime: string;
  mTime: string;
  active: number;
  apiDoc: number;
  imageUrl: string;
  resetPassword: boolean;
  ctime: number;
  mtime: number;
}

const initialState: IUserState = {
  isLogged: false,
  userId: 0,
  userName: '',
  password: '',
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  address: null,
  age: null,
  sex: null,
  bod: null,
  jobTitle: '',
  cTime: '',
  mTime: '',
  active: 1,
  apiDoc: 0,
  imageUrl: '',
  resetPassword: false,
  ctime: 0,
  mtime: 0,
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

export const {setAccount, actionLogout} = accountSlice.actions;
export default accountSlice.reducer;
