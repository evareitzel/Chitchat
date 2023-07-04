
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { selectUser, REMOVE_MESSAGE } from '../features/userSlice'
import { messageDelete } from '../features/messagesSlice'

function Message({ message}) {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const t = new Date(message.time)
  const { id, text } = message

  function handleDeleteMessage(e) {
    // console.log(message)
    // console.log(text)
    // console.log(id)
    const id = e.target.value

    dispatch(messageDelete(id))
    // handle errors

    // // move fetch to store (messagesSlice)
    // fetch(`/messages/${id}`, {
    //   method: 'DELETE',
    // })
    // .then(r => r.json())
    // .then(r => {
    //   // debugger
    //   console.log(message)}) // get message var

    // .then(() => handleDeleteMessage(id)) // get message var
    // dispatch(REMOVE_MESSAGE(message))


     // not wkg
    // dispatch(REMOVE_MESSAGE(id)) // not wkg
    // alert("Message Deleted!")

  }

  // function handleDeleteMessage(message) {
  //   const updated = messages.filter(m => m.id !== message.id)
  //   setMessageList(updated)
  // }
 
  return (
  <li className="Li">
    <div className="Message">
      {text}
      {/* <button onClick={handleDeleteClick}>🗑</button>  */}
      <button value={id} onClick={handleDeleteMessage}>🗑</button> 
      {/* onClick={()=>{handleDeleteClick()}} */}
    </div>
    <p className="Sender">
      {(message.user.id !== user.id) ? (`${message.user.username} | `) : ('')}  
      {t.toLocaleString('en-us')}             
    </p>
  </li>
)
}

export default Message

      // {/* <button value={m} onClick={(e)=>handleDeleteClick}>x</button> */}
