import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { selectUser } from '../features/userSlice'
import EditMessageForm from './EditMessageForm'

function Message({ message }) {
  const { text, id } = message
  // const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const t = new Date(message.time)
  const [editForm, setEditForm] = useState(false)

  const showEditForm = 
  !editForm
  ? null
  : <EditMessageForm message={message} />

  function handleDeleteClick(e) {
    // DELETE fetch
    // const id = e.target.value
    // dispatch(deleteMessage(id))
    alert("Message Deleted!")
  }
 
  return (
    <li className="Li">
      <div className="Message">
        {text}
        <br />
      </div>

      <div>
        <p className="Sender">
          {(message.user.id !== user.id) ? (`${message.user.username} | `) : ('')}  
          {t.toLocaleString('en-us')}
          {/* should i just render errors from backend instead? */}
          <button className="Message-button">Add Reaction</button> 
          {/* onClick={() => show <Reaction /> component} */}
          {/* make Reaction component */}
          {/* import Reaction from'./Reaction' */}

          {message.user.id === user.id 
            ? <>
              <button onClick={() => setEditForm(!editForm)}
              className="Message-button">
                {!editForm ? 'Edit' : 'Done Editing'}
              </button>
              <button value={id} onClick={handleDeleteClick} className="Message-button">
                🗑
              </button>
            </> : null
          }
        </p>
      </div>
      {showEditForm}
      {/* {errors.map(err => <div key={err} >x {err}</div>)} */}
    </li>
  )
}

export default Message