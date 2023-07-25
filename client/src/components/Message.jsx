import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { selectUser } from '../features/userSlice'
import { messageDestroy } from '../features/messagesSlice'
import EditMessageForm from './EditMessageForm'
import ReactionPicker from './ReactionPicker'

function Message({ message }) {
  const { text, id, reactions } = message
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const t = new Date(message.time)
  // const loadingState = useSelector(state => state.messages.loading)

  const reactionErrors = useSelector(state => state.reactions.errors)

  const [editForm, setEditForm] = useState(false)

  const showEditForm =
    !editForm
    ? null
    : <EditMessageForm message={message} />

  const handleDeleteClick = () => {
    dispatch(messageDestroy(id))
    // alert("Message Deleted!")
  }

  return (
    <div className="Li">
      <div className="Message-container">
        {text}
      </div>

      <div className="Sender">
          {(message.user.id !== user.id) ? (`${message.user.username} • `) : ('')}
          {t.toLocaleString('en-us')}
          {reactions.map(r => r.emotion)}

          {message.user.id === user.id
            ? <>
              <button onClick={() => setEditForm(!editForm)}
                className="Message-button">
                {!editForm ? 'Edit' : 'Done Editing'}
              </button>
              {/* {showEditForm} */}
              <button value={id} onClick={handleDeleteClick} className="Message-button">🗑</button>
            </> 
          : null}

        {/* {messageErrors.map(err => <div key={err} >x {err}</div>)} */}
      </div>

      {showEditForm}

      <ReactionPicker message={message} />

      {/* {reactionErrors.map(err => <div key={err} >x {err}</div>)} */}
    </div>
  )
}


export default Message