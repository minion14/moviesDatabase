import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { createStore,applyMiddleware } from 'redux';

import './index.css';
import 'tachyons';
import './components/card.css';
import reportWebVitals from './reportWebVitals';
import App from './containers/App'
import {movieSearch} from './store/reducers'
import { createLogger } from 'redux-logger';


const logger = createLogger()
const store = createStore(movieSearch,applyMiddleware(logger))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
