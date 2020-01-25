/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import reduxStore from '../redux/Store';
import {Provider} from 'react-redux';
import AppNavigation from '../navigation/AppNavigation';

const App: () => React$Node = () => {
  return (
    <Provider store={reduxStore.store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
