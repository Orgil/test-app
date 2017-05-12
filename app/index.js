import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Root from './Root';
import TestComp from 'test-lib';

const store = createStore(function() {});

ReactDOM.render(
  <Provider store={store}>
    <TestComp />
  </Provider>,
  document.getElementById('root')
);
