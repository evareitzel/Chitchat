import { configureStore } from "@reduxjs/toolkit"

import userReducer from './features/userSlice'
import groupsReducer from './features/groupsSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    groups: groupsReducer
  },
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware({

  }),
})

export default store