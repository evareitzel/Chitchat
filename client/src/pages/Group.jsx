import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux" 
import MessageForm from '../components/MessageForm'
import Message from '../components/Message'
import { fetchMessages } from '../features/messagesSlice'

function Group({ group }) {
  const messages = (useSelector(state => state.messages.messages))
  const dispatch = useDispatch()
  const { users, name } = group

  const groupMessages = messages.filter(m =>
    m.group.id === group.id)

  useEffect(() => {
    dispatch(fetchMessages())
  }, [dispatch])

  
  const names = users.map(u => u.username)
  const unique = [...new Set(names)] 

  return (
    <>
    <div>
      <h2>List of messages</h2>
        {messages.loading && <div>Loading...</div>}
        {!messages.loading && messages.error ? <div>Error: {messages.error}</div> : null}
        {messages.loading && messages.messages.length ? (
          <ul>
            {
              messages.messages.map(message => (
                <li key={message.id}>{message.text}</li>
              ))
            }
          </ul>
        ) : null}
    </div>

      <h1>{name}</h1>
      <p>👥 {unique.join(', ')}</p>
      
      <ul>
        {groupMessages.map(message => (
          <Message message={message} />
        ))}
      </ul>

      <MessageForm group={group} />
    </>
  )
}

export default Group