
import { useDispatch, useSelector } from "react-redux"
import { fetchGroups } from "../features/groupsSlice"
import React, { useEffect } from "react"
import { selectUser } from '../features/userSlice'
import MessageForm from '../components/MessageForm'


function Group({ group }) {
  const dispatch = useDispatch()
  
  const user = useSelector(selectUser)

  useEffect(() => {
    dispatch(fetchGroups())
  }, [dispatch])
  

  const gr = useSelector(state => state.groups.entities.filter(g => g.id === group.id))[0] //

  const { users, messages, name } = gr

  return (
    <>
      <h1>{name}</h1>
      <p>Members: {users.map(u => u.username).join(', ')}</p>

      <ul>
        {messages.map(m => (
          <li className="Li">
            <div className="Message">
              {m.text}
            </div>
            <p className="Sender">
              {(m.user.id !== user.id) ? (`${m.user.username} | `) : ('')}  
            {m.time}
            </p>
          </li>
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
