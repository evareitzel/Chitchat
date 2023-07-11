import React from 'react'
// import ReactDOM from "react-dom/client";
import { render } from 'react-dom'
import './index.css'
import App from './App'

import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"

render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)