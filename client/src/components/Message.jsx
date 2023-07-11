import { useDispatch, useSelector } from "react-redux"
import { selectUser } from '../features/userSlice'
import { deleteMessage } from '../features/messagesSlice'


function Message({ message }) {
  const { text, id } = message
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const t = new Date(message.time)

  function handleDeleteClick(e) {
    // DELETE fetch
    const id = e.target.value
    dispatch(deleteMessage(id)) // not updating state correctly

    alert("Message Deleted!")
  }
 
  return (
    <li className="Li">
      <div className="Message">
        {text}
        <button value={id} onClick={handleDeleteClick}>🗑</button> 
      </div>
      <p className="Sender">
        {(message.user.id !== user.id) ? (`${message.user.username} | `) : ('')}  
        {t.toLocaleString('en-us')}             
      </p>
      {/* {errors.map(err => <div key={err} >x {err}</div>)}  */}
      {/* empty input Breaks app */}
    </li>
  )
}

export default Message