import { useSelector } from "react-redux"
import { selectUser, REMOVE_MESSAGE } from '../features/userSlice'

function Message({ message}) {
  const user = useSelector(selectUser)
  const t = new Date(message.time)

  
  // EXTR 
  function handleDeleteClick(message) {
    console.log(message.text)
    fetch(`/messages/${id}`, {
    method: 'DELETE',
    })
    .then(r => r.json())
    .then(() => handleDeleteMessage(message)) // get message var
    dispatch(REMOVE_MESSAGE(message))

    alert("Message Deleted!")
  }

  // function handleDeleteMessage(message) {
  //   const updated = messages.filter(m => m.id !== message.id)
  //   setMessageList(updated)
  // }
 
  return(
  <li className="Li">
    <div className="Message">
      {message.text}
      <button onClick={(message) =>handleDeleteClick(message)}>🗑</button> 
    </div>
    <p className="Sender">
      {(message.user.id !== user.id) ? (`${message.user.username} | `) : ('')}  
      {t.toLocaleString('en-us')}             
      {/* <button value={m} onClick={(e)=>handleDeleteClick}>x</button> */}
    </p>
  </li>
)
}

export default Message