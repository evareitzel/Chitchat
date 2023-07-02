
// import { useDispatch, useSelector } from "react-redux"
// import { fetchGroups } from "../features/groupsSlice"
import { useSelector } from "react-redux"
import { selectUser } from '../features/userSlice'
import MessageForm from '../components/MessageForm'


function Group({ group }) {
  // const dispatch = useDispatch()
  const user = useSelector(selectUser)
  console.log(user)

  const { users, messages, name } = group

  // const [userInput, setUserInput] = useState('')
  // console.log(userInput)

  // function handleSubmit(e) {
  //   e.preventDefault()
  // dispatch(messageCreate(messageInput)) // msg create? (made up)
  // }

  console.log(messages[0
])
  // function showSender() {
  //   // m.user.id !== user.id ? (<p className="Sender">{m.user.username}</p>) : ('')
  // }


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
              {(m.user.id !== user.id) ? (`${m.user.username} | `) : ('')
}  
            {m.time}
            </p>
            {/* <p className="Sender">{m.user.username}</p> */}
          </li>
        ))}
      </ul>

      <MessageForm group={group} /> {/* setShowNewMessage={setShowNewMessage} */}

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