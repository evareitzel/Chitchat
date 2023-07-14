import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectUser } from '../features/userSlice'
import { messageCreate } from '../features/messagesSlice'

function MessageForm({ group }) {
  const dispatch = useDispatch()
  const [userInput, setUserInput] = useState('')
  const user = useSelector(selectUser)
  
  const errors = useSelector(state => state.messages.errors) // not getting errors because messageCreate.fulfilled gets hit before POST fetch returns response (message obj) 
  
  const handleSubmitClick = (e) => {
    e.preventDefault()

    const message = {
      user_id: user.id,
      group_id: group.id,
      text: userInput,
      time: new Date()
    }

    dispatch(messageCreate(message)) // breaks app & returns undefined - messageCreate.fulfilled gets hit before POST fetch returns response (message obj)

    setUserInput('') // Not clearing input
  }

  return (
    <form onSubmit={handleSubmitClick}>
      <label>New Message
        <input
          type="text"
          name="new_message"
          onChange={e => setUserInput(e.target.value)}
          className = "Message-input"
        />
      </label>
            
      {errors.map(err => <div key={err} >x {err}</div>)}

      <button type="submit">Send</button>
    </form>
  )
}

export default MessageForm










  // EXTRACT to messagesSlice
  // const postMessage = (newMessage) => {
  //   fetch('/messages', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(newMessage),
  //   }).then(r => {
  //     if (r.ok) {
  //       r.json()
  //         .then((message) => message)
  //     } else {
  //       r.json().then(err => setErrors(err.error))
  //     }
  //   })
  // }

