import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducer.js';
import { addComment } from './actions.js';
import { Provider } from 'react-redux';
import './index.css';
import { createStore } from 'redux';
import DevTools from './DevTools';

const store = createStore(reducer, DevTools.instrument());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));