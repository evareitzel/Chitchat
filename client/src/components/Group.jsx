import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux" 
import MessageForm from './MessageForm'
import Message from './Message'
import { fetchMessages } from '../features/messagesSlice'

function Group({ group }) {

  const dispatch = useDispatch()
  const { users, name } = group

  useEffect(() => {
    dispatch(fetchMessages())
  }, [dispatch])

  const messages = (useSelector(state => state.messages.entities))


  const groupMessages = messages.length >= 1 ? (
    messages.filter(m =>
    m.group.id === group.id)
  ) : []

  const names = users.map(u => u.username)
  const unique = [...new Set(names)]
  
  return (
    <>        
      <h2>{name}</h2>
      <p>👥 {unique.join(', ')}</p>
      
      <div>
        {groupMessages.map(message => (
          <Message key={message.id} message={message} />
        ))}
      </div>

      <MessageForm group={group} />
    </>
  )
}

export default Group