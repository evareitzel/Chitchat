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


  const groupMessages = messages.filter(m =>
    m.group.id === group.id)

  const names = users.map(u => u.username)
  const unique = [...new Set(names)]
  
  return (
    <>        
      {/* { loading ? <h3>Loading...</h3> : '' } */}

      <h2>{name}</h2>
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