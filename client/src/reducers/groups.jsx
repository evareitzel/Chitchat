import {
  LOADING_GROUPS,
  LOADED_GROUPS,
  LOADING_GROUP,
  LOADED_GROUP,
  LOADED_GROUP_MESSAGES
} from '../actions'

const defaultState = {
  status: "Not loading",
  list: [],
  errors: {}
}

const groupsReducer = (state=defaultState, action) => {
  switch(action.type) {
    case LOADING_GROUPS:
      return {...state, status: "Begin loading"}
    case LOADED_GROUPS:
      return {...state, list: action.payload, status: "Finished loading groups"}
    case LOADING_GROUP:
      return {...state, list: action.payload, status: "Begin loading"}
    case LOADED_GROUP:
      return {...state, list: action.payload, status: "Finished loading group"}
    case LOADED_GROUP_MESSAGES:
      let messageGroup = state.list.find(group => group.id == action.payload.group.id)
      if(messageGroup) {
        return state
      } else {
        return {
          status: "Finished loading group",
          list: [...state.list, action.payload.group]
        }
      }
    default: return state
  }
}

export default groupsReducer