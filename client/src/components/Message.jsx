import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectUser } from '../features/userSlice'
import { selectErrors } from '../features/groupsSlice'
import { fetchMessages, messageDelete } from '../features/messagesSlice' 

function Message({ message, onDeleteMessage }) {
  const { text, id } = message
  const dispatch = useDispatch()
  const errors = useSelector(selectErrors)

  const user = useSelector(selectUser)
  const t = new Date(message.time)

  useEffect(() => { // grabs initial messages arr
    dispatch(fetchMessages())
  }, [dispatch])

  function handleDeleteClick(e) {
    const id = e.target.value
    dispatch(messageDelete(id))
    // fetch(`/messages/${id}`, {
    //   method: "DELETE"
    // })
    onDeleteMessage(id)
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


  // console.log(useSelector(state => state))

  // const m2 = useSelector(state => state.messages.entities.find(m => m.id === id))
  // console.log(m2)

  // console.log(useSelector(state => state.messages.entities))


  // {/* {m2.text} */} {/* breaks app */}


  // fetch(`/messages/${id}`)
  // .then(r => r.json())
  // .then(message => console.log(message))

    // useEffect((id) => { // grabs initial message obj // err resp: UNAUTH / MSG NOT FOUND
  //   dispatch(fetchMessage(id))
  // }, [dispatch])
  

  // console.log(useSelector(state => state))

  // fetchMessage,
  //  id,