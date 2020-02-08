import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import moment from 'moment';
import 'moment/locale/uk';

import './styles/index.css';
import App from './App';
import store from "./redax/store";
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: 'http://localhost:3005/graphql',
});

moment.locale('uk');

ReactDOM.render(
  <ApolloProvider client={ client }>
    <Provider store={ store }>
      <App/>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();