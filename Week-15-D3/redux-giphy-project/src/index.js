import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import * as APIUtil from './util/apiUtil';
import configureStore from './store';
import { fetchGifs } from './actions/gifActions';

const store = configureStore();
// window.fetchGifs = fetchGifs;
window.apiFetchGifs = APIUtil.fetchGifs;
window.fetchGifs = fetchGifs;
window.store = store;

ReactDOM.render(
  <React.StrictMode>
    <Root store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);
