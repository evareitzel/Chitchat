import { configureStore } from "@reduxjs/toolkit"
import userReducer from './features/userSlice'
import groupsReducer from './features/groupsSlice'
import messageReducer from './features/messageSlice'
// import reactionsReducer from './features/reactionsSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    groups: groupsReducer,
    message: messageReducer,
    // reactions: reactionsReducer
  },
})

export default store


//, applyMiddleware } from "redux"
// import thunk from "redux-thunk"

  // middleware: (getDefaultMiddleware) => 
  // getDefaultMiddleware({
  //   // serializableCheck: {
  //   //   // Ignore these action types
  //   //   ignoredActions: ['user/logout/fulfilled', 'appointment/delete/fulfilled', 'user/delete/fulfilled'],
  //   // },
  // }),
