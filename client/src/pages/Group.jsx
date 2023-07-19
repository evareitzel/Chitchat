import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux" 
import MessageForm from '../components/MessageForm'
import Message from '../components/Message'
import { fetchMessages } from '../features/messagesSlice'

function Group({ group }) {

  const dispatch = useDispatch()
  const { users, name } = group

  useEffect(() => {
    dispatch(fetchMessages())
  }, [dispatch])

  const messages = (useSelector(state => state.messages.entities))
  // const loading = useSelector(state => state.messages.loading)


  const groupMessages = messages.length >= 1 ? (
    messages.filter(m =>
    m.group.id === group.id)
  ) : [] // helps screen not go white on UPDATE but bandaid not fix

  const names = users.map(u => u.username)
  const unique = [...new Set(names)]
  
  return (
    <>        
      {/* { loading ? <h3>Loading...</h3> : '' } */}

      <h2>{name}</h2>
      <p>👥 {unique.join(', ')}</p>
      
      <ul>
        {groupMessages.map(message => (
          <Message key={message.id} message={message} />
        ))}
      </ul>

      <MessageForm group={group} />
    </>
  )
}

export default Group