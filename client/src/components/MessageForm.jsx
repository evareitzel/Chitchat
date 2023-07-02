import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectUser, addMessage } from '../features/userSlice' // addGroup?


function MessageForm({ group }) { // { messageInfo, setMessageInfo, setShowNewMessage }

  const [userInput, setUserInput] = useState('')
  console.log(userInput)

  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const [errors, setErrors] = useState([])

  // function messageChange(e) {
  //   const name = e.target.name
  //   const value = e.target.value

  //   setUserInput({
  //     ...userInput,
  //     [name]: value,
  //   })
  //   //   setMessageInfo({
  //   //     ...messageInfo,
  //   //     [name]: value,
  //   //   })
  //   // }
  // }

  function messageSubmit(e) {
    e.preventDefault()

    // console.log(e.target.value)
  // dispatch(messageCreate(messageInput)) // msg create? (made up)

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
        r.json().then((newMessage) => {
          dispatch(addMessage(newMessage))
          // setShowNewMessage(true)
          // setUserInput('')
        })
      } else {
        // handle errors
        r.json().then(err => setErrors(err.error))
      }
    })
  }

  return (
    <form onSubmit={messageSubmit}>
      <input
        type="text"
        name="new_message"
        // onChange={messageChange}
       onChange={e => setUserInput(e.target.value)}
      />
      {errors.map(err => <h4 key={err}>{err}</h4>)}
      <button type="submit">Send</button>
    </form>
  )
}

export default MessageForm