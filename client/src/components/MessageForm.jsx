import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectUser } from '../features/userSlice'
import { addMessage } from '../features/messagesSlice'

function MessageForm({ group }) {
  const dispatch = useDispatch()
  const [userInput, setUserInput] = useState('')
  const user = useSelector(selectUser)
  const [errors, setErrors] = useState([])

  console.log(useSelector(state => state))

  function handleSubmitClick(e) {
    e.preventDefault()

    const newMessage = {
          user_id: user.id,
          group_id: group.id,
          text: userInput,
          time: new Date()
        }

    postNewMessage(newMessage)
    dispatch(addMessage(newMessage))// update message state - NOT WKG
    
    setUserInput('') // clear input - NOT WKG
  }

  // extract to messagesSlice
  const postNewMessage = (newMessage) => {
    fetch('/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMessage),
    }).then(r => {
      if (r.ok) {
        r.json()
        .then((message) => message)
      } else {
        r.json().then(err => setErrors(err.error))
      }
    })
  }

  console.log(useSelector(state => state.messages.messages))

  return (
    <form onSubmit={handleSubmitClick}>
      <input
        type="text"
        name="new_message"
       onChange={e => setUserInput(e.target.value)}
      />
      {errors.map(err => <h4 key={err}>{err}</h4>)} {/* check if wkg */}
      <button type="submit">Send</button>
    </form>
  )
}

export default MessageForm