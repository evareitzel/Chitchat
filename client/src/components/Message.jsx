import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectUser, deleteMessage } from '../features/userSlice'
import { selectErrors } from '../features/groupsSlice'
import { fetchMessages, REMOVE_MESSAGE, messageDelete } from '../features/messagesSlice'

function Message({ message, onDeleteMessage }) {
  const { text, id } = message
  const dispatch = useDispatch()
  const errors = useSelector(selectErrors)

  const user = useSelector(selectUser)
  const t = new Date(message.time)

  // useEffect(() => { // grabs initial messages arr
  //   dispatch(fetchMessages())
  // }, [dispatch])

  function handleDeleteClick(e) {
    const id = e.target.value
    dispatch(messageDelete(id)) // fetch in messagesSlice // SECOND IN SAMPLE APP
    dispatch(deleteMessage(id))
    // fetch(`/messages/${id}`, {
    //   method: "DELETE"
    // })
    // onDeleteMessage(id)
    dispatch(REMOVE_MESSAGE(id))


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
      {errors.map(err => <div key={err} >x {err}</div>)}
    </li>
  )
}

export default Message