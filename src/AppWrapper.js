import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store.js';
import App from './App.js';

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;