import React from 'react';

import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Styles from 'src/base/common/Styles';
import GlobalStackNavigation from 'src/navigation/RootStack';

import {
  persistor,
  store,
} from './src/redux/store';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar
            translucent
            barStyle={'dark-content'}
            backgroundColor={'transparent'}
          />
          <GestureHandlerRootView style={Styles.root}>
            <GlobalStackNavigation />
          </GestureHandlerRootView>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
