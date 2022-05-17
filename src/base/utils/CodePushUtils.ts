import CodePush from 'react-native-code-push';

import {
  CODE_PUSH_DEV,
  CODE_PUSH_PRODUCT,
} from '../common/Constants';

const CodePushUtils = {
  checkVersion(callback) {
    const installMode = CodePush.InstallMode.IMMEDIATE;
    CodePush.notifyAppReady();
    CodePush.sync(
      {
        installMode,
        deploymentKey: __DEV__ ? CODE_PUSH_DEV : CODE_PUSH_PRODUCT,
      },
      status => {
        switch (status) {
          case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
            callback(status, 'Đang kiểm tra phiên bản ...', '');
            break;
          case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
            callback(status, 'Đang tải phiên bản mới ...', '');
            break;
          case CodePush.SyncStatus.INSTALLING_UPDATE:
            callback(status, 'Đang tải phiên bản mới ... ', '');
            break;
          case CodePush.SyncStatus.UPDATE_IGNORED:
            callback(status, '', '');
            break;
          case CodePush.SyncStatus.UPDATE_INSTALLED:
            callback(status, '', '');
            break;
          case CodePush.SyncStatus.UNKNOWN_ERROR:
            callback(status, '', '');
            break;
          default:
            callback(status, '', '');
            break;
        }
      },
      ({receivedBytes, totalBytes}) => {
        const downloaded = (receivedBytes * 100) / totalBytes;
        callback(
          CodePush.SyncStatus.INSTALLING_UPDATE,
          'Phiên bản mới đã được cập nhật.\nBạn muốn khởi động lại ứng dụng?' +
            downloaded.toFixed(0) +
            '%',
          downloaded.toFixed(0),
        );
      },
    );
  },
};

export default CodePushUtils;
