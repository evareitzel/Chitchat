import { configureStore } from "@reduxjs/toolkit"

import userReducer from './features/user/userSlice'

const store = configureStore({
  reducer: {
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware({

  }),
})

export default store

// import { applyMiddleware } from "redux" 
// import thunkMiddleware from "redux-thunk"
// import { composeWithDevTools } from "redux-devtools-extension"

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
// // const store = createStore(groupsReducer) // , applyMiddleware(thunkMiddleware))
