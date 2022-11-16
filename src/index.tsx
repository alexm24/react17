import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App';
import { Provider } from 'react-redux';
import store from './store/store';
import { changePatientSel } from './utils/';
import { initUserInfoAsync, initPatientAllAsync } from './store/action/async';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

store.dispatch(initUserInfoAsync());
store.dispatch(initPatientAllAsync());

store.subscribe(() => changePatientSel());


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
