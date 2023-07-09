import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectUser } from '../features/userSlice'
import { addMessage } from '../features/messagesSlice' // postMessage,
// import { ADD_MESSAGE } from '../features/groupsSlice'

function MessageForm({ group, onAddMessage }) {

  const [userInput, setUserInput] = useState('')

  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const [errors, setErrors] = useState([])

  const newState = useSelector(state => state.messages.entities)
  console.log('newState: ')
  console.log(newState)

  function handleSubmitClick(e) {
    e.preventDefault()

    const newMessage = {
          user_id: user.id,
          group_id: group.id,
          text: userInput,
          // time: new Date()
          time: new Date().toLocaleString('en-us')

        }
    postNewMessage(newMessage)
    // dispatch(postMessage(newMessage))
    // dispatch(addMessage(newMessage))
    // dispatch(ADD_MESSAGE(newMessage))


    //     console.log(newMessage)
    // dispatch(postMessage(newMessage))
    // dispatch(addMessage(newMessage))
    // // dispatch(ADD_MESSAGE(newMessage))
    // setUserInput('') // check

    // fetch('/messages', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     user_id: user.id,
    //     group_id: group.id,
    //     text: userInput,
    //     time: new Date().toLocaleString('en-us')
    //   }),
    // }).then(r => {
    //   if (r.ok) {
    //     r.json()
    //     .then((newMessage) => newMessage)
    //     // console.log(newMessage))
    //     // debugger

    //       // dispatch(ADD_MESSAGE(newMessage))
    //       // dispatch(addMessage(newMessage))
    //     // )
    //     // setUserInput('') // check
    //     // e.target.value = ''
    //   } else {
    //     r.json().then(err => setErrors(err.error))
    //   }
    // })
  }

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
        .then((message) => onAddMessage(message))
        // .then((message) => ADD_MESSAGE(message))
        // console.log(newMessage))
        // dispatch(ADD_MESSAGE(newMessage)))
        // console.log(newMessage))
        // debugger

          // dispatch(ADD_MESSAGE(newMessage))
          // dispatch(addMessage(newMessage))
        // )
        // setUserInput('') // check
        // e.target.value = ''
      } else {
        r.json().then(err => setErrors(err.error))
      }
    })
  }

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


  // // .then(newMessage => setNewMessage(newMessage))
  // .then(newMessage => onAddMessage(newMessage))

  // // dispatch(addMessage(newMessage)) ///////// WHY is this not refreshing messages in UI????
  //   // setRefreshMessages(true)

  // , onAddMessage, setNewMessage, setShowNewMessage  // { messageInfo, setMessageInfo, setShowNewMessage }