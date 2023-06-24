import { legacy_createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import rootReducer from "./reducers"

const store = legacy_createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store


// import { configureStore } from "@reduxjs/toolkit";

// import messagesReducer from "./features/messages/messagesSlice"

// const store = configureStore({
//   reducer: {
//     messages: messagesReducer,
//   },
// });