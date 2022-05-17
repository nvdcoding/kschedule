import {setAutoFreeze} from 'immer';
import {combineReducers} from 'redux';
import logger from 'redux-logger';
import {
  persistReducer,
  persistStore,
} from 'redux-persist';
import thunk from 'redux-thunk';
import appReducer, {IAppState} from 'src/redux/slices/appSlice';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';

import infoUserReducer, {IUserState} from '../slices/accountSlice';

setAutoFreeze(false);

export interface IRootState {
  infoUser: IUserState;
  app: IAppState;
}

const reducers = combineReducers({
  infoUser: infoUserReducer,
  app: appReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 100000,
  whitelist: ['infoUser', 'app'],
};

let middleware = [thunk];
if (__DEV__) {
  middleware.push(logger);
}

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: middleware,
});
const persistor = persistStore(store);

export {persistor, store};
