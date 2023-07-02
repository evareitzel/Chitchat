
// import { useDispatch, useSelector } from "react-redux"
// import { fetchGroups } from "../features/groupsSlice"

function Group({ group }) {
//   const dispatch = useDispatch()
  const { users, messages, name } = group

  // const [userInput, setUserInput] = useState('')
  // console.log(userInput)

  // function handleSubmit(e) {
  //   e.preventDefault()
    // dispatch(messageCreate(messageInput)) // msg create? (made up)
  // }

  return( 
    <>
      <h1>{name}</h1>
      <p>Members: {users.map(u => u.username).join(', ')}</p>
      <ul>
        {messages.map(m => <li className="Message">{m.text}</li>)}
      </ul>
      
     <form> 
      {/* onSubmit={handleSubmit} */}
       <input
       type="text"
       name="newMessage"
       onChange={e => e.target.value}
      //  onChange={e => setUserInput(e.target.value)}
       />
        <button type="submit">Send</button>
     </form>
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