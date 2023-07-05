import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectGroups, fetchGroups } from '../features/groupsSlice'

import MessageForm from '../components/MessageForm'
import Message from '../components/Message'

function Group({ group, id }) {

  const dispatch = useDispatch()
  // const groups = useSelector(selectGroups)

  // const group = groups.filter(g => g.id === id)
  
  // useEffect(() => { // grabs initial groups arr
  //   dispatch(fetchGroups())
  // }, [dispatch])

  const { users, messages, name } = group

  const names = users.map(u => u.username)
  const unique = [...new Set(names)] 

  return (
    <>
      <h1>{name}</h1>
      <p>👥 {unique.join(', ')}</p>

      <ul>
        {messages.map(message => (
          <Message message={message} />
        ))}
      </ul>

      <MessageForm group={group} /> 
    </>
  )
}

export default Group