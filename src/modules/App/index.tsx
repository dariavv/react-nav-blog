import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import AppNavigation from 'navigation/AppNavigation';
import store from 'store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
