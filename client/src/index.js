import React from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './App'

import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"

render(
  <React.StrictMode>
  <Router>
    <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)