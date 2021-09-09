import React from "react";
import ReactDOM from 'react-dom';
import App from './App'
import createStore from './CreateStore'
import {createBrowserHistory} from 'history';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

const initialState = {};

const browserHistory = createBrowserHistory();

const { store, persistor } = createStore(initialState, browserHistory)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);