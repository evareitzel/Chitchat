import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { selectUser } from '../features/userSlice'
import { messageDestroy } from '../features/messagesSlice' // , selectErrors, messageRemoved
import EditMessageForm from './EditMessageForm'
import ReactionPicker from './ReactionPicker'

function Message({ message }) {
  const { text, id, reactions } = message
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const t = new Date(message.time)

  const loadingState = useSelector(state => state.messages.loading)
  console.log(loadingState)

  // console.log(useSelector(state => state))

  // try making a selectErrors func in messagesSlice and reactionsSlice

  // const messageErrors = useSelector(state => state.messages.errors)
  // const messageErrors = useSelector(selectErrors())
  // console.log('messageErrors from Message component:')
  // console.log(messageErrors)

  const reactionErrors = useSelector(state => state.reactions.errors)

  // console.log(useSelector(state => state))

  // console.log('errors: ')
  // console.log(messageErrors)
  // console.log(reactionErrors)  

  const [editForm, setEditForm] = useState(false)

  const showEditForm =
    !editForm
    ? null
    : <EditMessageForm message={message} />

  const handleDeleteClick = () => {
    dispatch(messageDestroy(id))
    dispatch(fetchGroups())
    // alert("Message Deleted!")
  }

  return (
    <li className="Li">
      <div className="Message">
        {text}
      </div>

      <div>
        <span className="Sender">
          {(message.user.id !== user.id) ? (`${message.user.username} • `) : ('')}
          {t.toLocaleString('en-us')}
        </span>

        {message.user.id === user.id
        ? <>
            <button onClick={() => setEditForm(!editForm)}
              className="Message-button">
              {!editForm ? 'Edit' : 'Done Editing'}
            </button>
            {showEditForm}
            <button value={id} onClick={handleDeleteClick} className="Message-button">🗑</button>
          </> 
        : null}
        
        {/* FIX - breaking bc resp is undefined */}
        {/* {messageErrors.map(err => <div key={err} >x {err}</div>)} */}
      </div>

      <div>
        {/* Fix so emojis show nums not duplicates */}
        {reactions.map(r => r.emotion)}
        <ReactionPicker message={message} />
      </div>

      {/* not checked */}
      {reactionErrors.map(err => <div key={err} >x {err}</div>)}
    </li>
  )
}


export default Message