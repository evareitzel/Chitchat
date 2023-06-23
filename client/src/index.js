import React from 'react';
// import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { render } from 'react-dom';
import './index.css';
import App from './App';
import store from "./store"

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
