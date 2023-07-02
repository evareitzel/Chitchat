import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectUser, addMessage } from '../features/userSlice'


function MessageForm({ group }) { // , setShowNewMessage  // { messageInfo, setMessageInfo, setShowNewMessage }

  const [userInput, setUserInput] = useState('')

  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const [errors, setErrors] = useState([])


  function messageSubmit(e) {
    e.preventDefault()
    // setUserInput('') // HOW TO CLEAR FORM FIELD

    const newMessage = {
      user_id: user.id,
      group_id: group.id,
      text: userInput,
      time: new Date()
    }

    fetch('/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMessage),
    }).then(r => {
      if (r.ok) {
        r.json()
        .then(i => console.log(i)) // WKG. huh
        .then((newMessage) => {
          
          dispatch(addMessage(newMessage)) ///////// WHY is this not refreshing messages in UI????
            // setRefreshMessages(true)
          // setUserInput('')
        })
      } else {
        r.json().then(err => setErrors(err.error))
      }
    })
  }

  return (
    <form onSubmit={messageSubmit}>
      <input
        type="text"
        name="new_message"
       onChange={e => setUserInput(e.target.value)}
      />
      {errors.map(err => <h4 key={err}>{err}</h4>)}
      <button type="submit">Send</button>
    </form>
  )
}

export default MessageForm