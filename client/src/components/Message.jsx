
import { useDispatch, useSelector } from "react-redux"
import { selectUser, REMOVE_MESSAGE } from '../features/userSlice' // , REMOVE_MESSAGE
// import { deleteMessage } from '../features/userSlice'
import { deleteMessage, selectErrors } from '../features/groupsSlice'
import { messageDelete } from '../features/messagesSlice'

function Message({ message }) {
  const dispatch = useDispatch()
  const errors = useSelector(selectErrors)

  const user = useSelector(selectUser)
  const t = new Date(message.time)
  const { id, text } = message

  function handleDeleteMessage(e) {
    const id = e.target.value
    dispatch(messageDelete(id))
    // handle errors

    // dispatch(REMOVE_MESSAGE(id))
    dispatch(deleteMessage(id)) // not wkg // REMOVE_MESSAGE // message

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