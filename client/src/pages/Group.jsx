import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux" 
import MessageForm from '../components/MessageForm'
import Message from '../components/Message'
import { fetchMessages, addMessage, ADD_MESSAGE } from '../features/messagesSlice' // addMessage

function Group({ group, onAddMessage }) {
  const dispatch = useDispatch()
  const { users, name } = group
  const messages = (useSelector(state => state.messages.entities))

  useEffect(() => {
    dispatch(fetchMessages())
  }, [dispatch])

  const groupMessages = messages.filter(m => m.group.id === group.id )
  console.log(groupMessages)
  
  const names = users.map(u => u.username)
  const unique = [...new Set(names)] 

  return (
    <>
      <h1>{name}</h1>
      <p>👥 {unique.join(', ')}</p>
      
      <ul>
        {groupMessages.map(message => (
          <Message message={message} />
        ))}
      </ul>

      <MessageForm group={group} onAddMessage={onAddMessage} />
    </>
  )
}

export default Group