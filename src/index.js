import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// MUI
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './components/styles/DIYtheme';

// Redux - our state manager.
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Our state reducer
import reducers from './reducers';

// User Context to keep track of current user
import { UserContextProvider } from './context/UserContext';
import PostContextProvider from './context/PostContext';

// This is the basic setup for Redux - we give create store the Combined reducers called 'reducer'
// and compose is simply applying the middleware so we can perform async functions.
const store = createStore(reducers, compose(applyMiddleware(thunk)));

// Why did we do this?
/*
// this is a persisted state from the previous usage of the app.
const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

const store = createStore(
  reducers,
  persistedState,
  compose(applyMiddleware(thunk)),
);

// subscribes to any changes in redux store and save it to local storage
store.subscribe(() => {
  // Save it in local storage so that if we refresh any page, we are still logged in.
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});
*/

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme('light')}>
      <CssBaseline />
      <UserContextProvider>
        <PostContextProvider>
          <App />
        </PostContextProvider>
      </UserContextProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
