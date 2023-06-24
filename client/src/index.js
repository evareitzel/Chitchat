import React from 'react';
import { render } from 'react-dom'; // import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import store from "./store" //
import { createStore, applyMiddleware } from "redux" // 
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';

import App from './App';
import groupsReducer from './features/groups/groupsSlice.jsx'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(groupsReducer) // , applyMiddleware(thunkMiddleware))

render(
  // <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
