import React from 'react';

import { debug } from 'src/base/utils/DebugUtil';

import {
  CommonActions,
  NavigationContainerRef,
} from '@react-navigation/native';

import { NEW_PASSWORD_SCREEN } from './screen';

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name, params?) {
  debug('actions.tsx < navigate > ===> ', navigationRef.current);
  navigationRef.current?.navigate(name, params);
}

export function reset(name, params?) {
  debug('actions.tsx < reset > ===> ', navigationRef.current);
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [
        { name: 'main' },
        {
          name: name,
          params: params,
        },
      ],
    }),
  );
}

export const APP_PREFIX = [
  'dev.learn.goedu.asia://',
  'http://dev.learn.goedu.asia/',
];

export const PATH_SCREENS = {
  screens: {
    [NEW_PASSWORD_SCREEN]: 'change-pass/:item_id',
  },
};
