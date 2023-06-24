import { combineReducers } from "redux"
import GroupsReducer from './groups'
// import MessagesReducer from './messages'
// import ReactionsReducer from './reactions'

export default combineReducers({
  groups: GroupsReducer // ,
  // messages: MessagesReducer,
  // reactions: ReactionsReducer
})