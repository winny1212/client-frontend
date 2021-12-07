import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

// Redux - our state manager.
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Our state reducer
import reducers from './reducers';

// This is the basic setup for Redux - we give create store the Combined reducers called 'reducer'
// and compose is simply applying the middleware so we can perform async functions.
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
