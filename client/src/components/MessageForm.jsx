import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectUser, ADD_MESSAGE } from '../features/userSlice'

function MessageForm({ group }) {

  const [userInput, setUserInput] = useState('')

  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const [errors, setErrors] = useState([])

  function messageSubmit(e) {
    e.preventDefault()

    fetch('/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: user.id,
        group_id: group.id,
        text: userInput,
        time: new Date().toLocaleString('en-us')
      }),
    }).then(r => {
      if (r.ok) {
        r.json()
        .then((newMessage) => {
          // debugger
          dispatch(ADD_MESSAGE(newMessage))
        })
        setUserInput('') // check
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
      {errors.map(err => <h4 key={err}>{err}</h4>)} {/* check if wkg */}
      <button type="submit">Send</button>
    </form>
  )
}

export default MessageForm



  // // .then(newMessage => setNewMessage(newMessage))
  // .then(newMessage => onAddMessage(newMessage))

  // // dispatch(addMessage(newMessage)) ///////// WHY is this not refreshing messages in UI????
  //   // setRefreshMessages(true)

  // , onAddMessage, setNewMessage, setShowNewMessage  // { messageInfo, setMessageInfo, setShowNewMessage }