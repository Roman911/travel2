import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import moment from 'moment';
import 'moment/locale/uk';
import './styles/index.css';
import App from './App';
import store from "./redax/store";
import * as serviceWorker from './serviceWorker';

moment.locale('uk');

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();