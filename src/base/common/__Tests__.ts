import {
  BLOG_SCREEN,
  BLOG_STACK,
  DETAIL_COURSE_SCREEN,
  DETAIL_LIVE_CLASS_SCREEN,
  DRAWER_STACK,
  HOME_SCREEN,
  HOME_TAB_NAVIGATOR,
  LIST_COURSE_SCREEN,
  LIST_COURSE_STACK,
  LIVE_CLASS_SCREEN,
  LIVE_CLASS_STACK,
  MY_COURSE_SCREEN,
  PROFILE_SCREEN,
  TEMPLATE_SCREEN,
} from 'src/navigation/screen';

import {isTablet} from './Constants';

export const LIST_LANGUAGE = ['', '', 'Tiếng việt', 'US English', '', ''];

export const LIST_DRAWER = [
  {
    id: 0,
    name: 'MENU',
    icon: 'app-icon',
  },
  {
    id: 1,
    name: 'MY_COURSE',
    icon: 'book-2',
    screen: MY_COURSE_SCREEN,
    childrenScreen: [
      HOME_TAB_NAVIGATOR,
      HOME_SCREEN,
      MY_COURSE_SCREEN,
      DETAIL_COURSE_SCREEN,
      DRAWER_STACK,
    ],
  },
  {
    id: 2,
    name: 'LIST_COURSE',
    icon: 'book-1',
    screen: isTablet ? LIST_COURSE_SCREEN : LIST_COURSE_STACK,
    childrenScreen: [LIST_COURSE_SCREEN, LIST_COURSE_STACK],
  },
  {
    id: 3,
    name: 'GO_EDU_LIVE_CLASS',
    icon: 'tivi-icon',
    screen: isTablet ? LIVE_CLASS_SCREEN : LIVE_CLASS_STACK,
    childrenScreen: [
      LIVE_CLASS_SCREEN,
      LIVE_CLASS_STACK,
      DETAIL_LIVE_CLASS_SCREEN,
    ],
  },
  {
    id: 4,
    name: 'BLOG',
    icon: 'carbon-blog',
    screen: isTablet ? BLOG_SCREEN : BLOG_STACK,
    childrenScreen: [BLOG_SCREEN, BLOG_STACK],
  },
  {
    id: 5,
    name: 'TEMPLATE_LIBRARY',
    icon: 'image-icon',
    screen: TEMPLATE_SCREEN,
    childrenScreen: [TEMPLATE_SCREEN],
  },
  {
    id: 6,
    name: 'PERSONAL_INFORMATION',
    icon: 'contact-icon',
    screen: PROFILE_SCREEN,
    childrenScreen: [PROFILE_SCREEN],
  },
  {
    id: 7,
    name: 'LOGOUT',
    icon: 'logout-icon',
  },
];

export const LIST_COURSE = [
  {
    title: 'Cơ bản',
    data: [],
  },
  {
    title: 'Nâng cao',
    data: [],
  },
  {
    title: 'Chuyên gia',
    data: [],
  },
];

export const LIST_COURSE_TABLET = [
  {
    title: 'Cơ bản',
    data: [{data: [1, 1, 4, 4]}],
  },
  {
    title: 'Nâng cao',
    data: [{data: [1, 1, 4, 4, 4]}],
  },
  {
    title: 'Chuyên gia',
    data: [{data: [1, 1, 2, 3]}],
  },
];

export const LIST_TYPE_LIST_COURSE = [
  {id: 0, name: 'ALL'},
  {id: 1, name: 'Cơ bản'},
  {id: 2, name: 'Nâng cao'},
  {id: 3, name: 'Chuyên gia'},
];

export const FORM_REGISTER = [
  {
    id: 0,
    title: 'FIRST_NAME',
    placeholder: 'ENTER_FIRST_NAME',
    key: 'firstName',
  },
  {id: 1, title: 'LAST_NAME', placeholder: 'ENTER_LAST_NAME', key: 'lastName'},
  {id: 2, title: 'EMAIL_LOGIN', placeholder: 'ENTER_EMAIL', key: 'email'},
  {
    id: 3,
    title: 'PASSWORD',
    placeholder: 'ENTER_PASSWORD',
    key: 'password',
    security: true,
  },
  {
    id: 4,
    title: 'CONFIRM_PASSWORD',
    placeholder: 'RE_ENTER_PASSWORD',
    key: 'confirmPassword',
    security: true,
  },
  {
    id: 5,
    title: 'PHONE_NUMBER',
    placeholder: 'ENTER_PHONE_NUMBER',
    key: 'mobile',
  },
  {id: 6, title: 'JOB', placeholder: 'ENTER_JOB', key: 'job'},
];
