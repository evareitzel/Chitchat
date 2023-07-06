import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectUser } from '../features/userSlice' // , REMOVE_MESSAGE
// import { deleteMessage } from '../features/userSlice'
import { deleteMessage, selectErrors, selectGroups, fetchGroups, REMOVE_MESSAGE } from '../features/groupsSlice'
import { fetchMessages, selectMessages } from '../features/messagesSlice'


import { messageDelete } from '../features/messagesSlice'



function Message({ message, id }) {
  const dispatch = useDispatch()
  const errors = useSelector(selectErrors)
  // const message = useSelector(select)

  const user = useSelector(selectUser)
  const t = new Date(message.time)

  const groups = useSelector(selectGroups)
  // .filter(g => g.id === group_id)

  console.log('groups: ')  
  console.log(groups)
  // const messages = groups.filter(g => g.id === id)[0]

  const m2 = useSelector(selectMessages)
  console.log('m2: ')
  console.log(m2)

  // console.log('messages: ')
  // console.log(messages)


  useEffect(() => { // grabs initial messages arr
    dispatch(fetchMessages())
  }, [dispatch])

  console.log(useSelector(state => state.messages.entities))


  useEffect(() => { // grabs initial groups arr
    dispatch(fetchGroups())
  }, [dispatch])

  const { text } = message

  function handleDeleteMessage(e) {
    const id = e.target.value
    dispatch(messageDelete(id))
    // handle errors

    dispatch(REMOVE_MESSAGE(id))
    // dispatch(deleteMessage(id)) // not wkg // REMOVE_MESSAGE // message

    // --> trigger rerender groups from store

    alert("Message Deleted!")
  }
 
  return (
    <li className="Li">
      <div className="Message">
        {text}
        <button value={id} onClick={handleDeleteMessage}>🗑</button> 
      </div>
      <p className="Sender">
        {(message.user.id !== user.id) ? (`${message.user.username} | `) : ('')}  
        {t.toLocaleString('en-us')}             
      </p>
      {errors.map(err => <div key={err} >x {err}</div>)}
    </li>
  )
}

export default Message