import React  from "react"

import { useSelector } from "react-redux"
// import { fetchGroups } from "../features/groupsSlice"
// import React, { useEffect, useState } from "react"
import MessageForm from '../components/MessageForm'
import Message from '../components/Message'

function Group({ group }) {
  let gr = useSelector(state => state.groups.entities.filter(g => g.id === group.id))[0] //
  const { users, messages, name } = gr
  // const [messageList, setMessageList] = useState(messages)

  // useEffect(() => {
  //   dispatch(fetchGroups())
  // }, [dispatch])

  const names = users.map(u => u.username)
  const unique = [...new Set(names)] 
  console.log(gr)

  return (
    <>
      <h1>{name}</h1>
      <p>👥 {unique.join(', ')}</p>

      <ul>
        {messages.map(m => (
          <Message message={m} />
        ))}
      </ul>

      <MessageForm group={gr} /> 
    </>
  )
}

export default Group


    // dispatch state
    // --> In groupsSlice
    // fetch('/messages', 'Content-Type': 'application/json',
    // head: 'PATCH',
    // body: {
      // 'text': // e.target.value ?
    // })
    // .then(r => r.json())
    // .then()
//   }


  // console.log(id) // get id from html path?
  // get state from store (dispatch/similar)
  //  const group = allGroups.filter(g => id === g.id)



//   <form> 
//   {/* onSubmit={handleSubmit} */}
//    <input
//    type="text"
//    name="newMessage"
//    onChange={e => e.target.value}
//   //  onChange={e => setUserInput(e.target.value)}
//    />
//     <button type="submit">Send</button>
//  </form>


////////// FROM CLEANUP 7/2

      // {/* setShowNewMessage={setShowNewMessage} */}

      // {/* <ul>
      //   {messages.map(m => (
      //     <li className="Li">
      //       <div className="Message">
      //         {m.text}
      //       </div>
      //       <p className="Sender">
      //         {(m.user.id !== user.id) ? (`${m.user.username} | `) : ('')}  
      //       {m.time}
      //       </p>
      //     </li>
      //   ))}
      // </ul> */}


  // console.log('testing gr: ') //
  // console.log(gr) //


  // const [userInput, setUserInput] = useState('')
  // console.log(userInput)

  // function handleSubmit(e) {
  //   e.preventDefault()
  // dispatch(messageCreate(messageInput)) // msg create? (made up)
  // }


    // console.log(user)

  // const { users, messages, name } = group

// const [showNewMessage, setShowNewMessage] = useState(messages)
  // const setRefreshMessages = useSelector(state => state.groups.entities.filter(g => g.id === group.id))// useSelector(selectUser)



  // console.log(gr)
  // const gr = useSelector(state => state.groups.entities.filter(g => g.id === group.id))[0] //





//   // messages = 
//   useEffect(() => {
//     if (newMessage) {
//       dispatch(fetchGroups(), fetchGroups())
//       // dispatch(fetchGroups())
//     }
// }, [dispatch, newMessage]) // newMessage // triggers after new msg

//   // const [newMessage, setNewMessage] = useState([])

// // useEffect(() => {
// //   dispatch(fetchGroups())
// // }, [dispatch])


//   function handleAddMessage(newMessage) {
//     setNewMessage(newMessage)
//     // gr = dispatch(fetchGroups())
//     // useSelector(state => state.groups.entities.filter(g => g.id === group.id))[0]
//     // console.log(gr.shove(newMessage))

// setNewMessage={setNewMessage} onAddMessage={handleAddMessage}