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



// import React from "react"
// import ReactDOM from "react-dom/client"
// import App from "./App"
// import "./index.css"

// import store from "./store";
// import { Provider } from "react-redux";
// import { BrowserRouter as Router } from "react-router-dom"


// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Router>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </Router>
//   </React.StrictMode>
// );