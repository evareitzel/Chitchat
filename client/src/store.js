import { configureStore } from "@reduxjs/toolkit"
import userReducer from './features/userSlice'
import groupsReducer from './features/groupsSlice'
import messagesReducer from './features/messagesSlice'
// import reactionsReducer from './features/reactionsSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    groups: groupsReducer,
    messages: messagesReducer,
    // reactions: reactionsReducer
  },
})

export default store