import {
  LOADING_GROUPS,
  LOADED_GROUPS,
  LOADING_GROUP,
  LOADED_GROUP,
  LOADED_GROUP_MESSAGES
} from './'

export const fetchGroups = () => {
  return (dispatch) => {
    dispatch({type: LOADING_GROUPS})
    fetch('/groups', { // 'http://localhost:3000/groups'
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(r => r.json())
    .then(groups => {
      dispatch({
        type: LOADED_GROUPS,
        payload: groups
      })
    })
  }
}

export const fetchGroup = (groupId) => {
  return (dispatch) => {
    dispatch({type: LOADING_GROUP, payload: groupId})
    fetch(`/groups/${groupId}`, { // full http path?
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(r => r.json())
    .then(groupMessages => {
      dispatch({
        type: LOADED_GROUP_MESSAGES, // not LOADED_GROUPS(?)
        payload: groupMessages
      })
    })
  }
}