
// import { useDispatch, useSelector } from "react-redux"
// import { fetchGroups } from "../features/groupsSlice"

function Group({ group }) {
//   const dispatch = useDispatch()
  const { users, messages, name } = group // id, 

//   const allGroups = useSelector(state => state.groups.entities)

//   // function handleSubmitMessage ()
//   const handleSubmitMessage = (e) => {
//     e.target.preventDefault()

//     // dispatch state
    
//     // fetch('/messages', 'Content-Type': 'application/json',
//     // head: 'PATCH',
//     // body: {
//       // 'text': // e.target.value ?
//     // })
//     // .then(r => r.json())
//     // .then()
//   }

//   //   console.log('GROUPS: ')
//   // console.log(allGroups)
    
//   // console.log(group)
//   // console.log(group.messages)
//   // console.log(group.messages.map(m => m.text))

//   // console.log(id) // get id from html path?

//   // get state from store (dispatch/similar)

//   //  const group = allGroups.filter(g => id === g.id)
  return( 
    <>
      <h1>{name}</h1>
      <p>Members: {users.map(u => u.username).join(', ')}</p>
      <ul>
        {messages.map(m => <li className="Message">{m.text}</li>)}
      </ul>

     {/* <form onSubmit={handleSubmitMessage}>
       <input
       type="text"
       name="newMessage"
       onChange={inputOnChange}
       />
        <button type="submit">Send</button>
     </form> */}

    </>

  )
}
export default Group