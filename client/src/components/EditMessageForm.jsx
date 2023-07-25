import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
// import { selectUser } from '../features/userSlice'
import { messageUpdate } from '../features/messagesSlice'

function EditMessageForm({ message }) {
  const { id, text, group } = message
  const [userInput, setUserInput] = useState(text)

  const dispatch = useDispatch()
  // const user = useSelector(selectUser)
  const user = useSelector(state => state.user.value)
  const errors = useSelector(state => state.messages.errors) // NOT RENDERING (don't get hit in time)

  const handleEditSubmit = (e) => {
    e.preventDefault()

    const updatedMessage = {
      id: id,
      user_id: user.id,
      group_id: group.id,
      text: userInput,
      time: new Date()
    }
        
    dispatch(messageUpdate(updatedMessage))
    // alert('Updated!')
  }
 
  return (
    <form onSubmit={handleEditSubmit} className='Edit-message-form'>
      <label>
        {/* Edit Message */}
        <br />
        <input 
          type="text"
          name="edit"
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          className='Edit-message-input'
          // 'Text-box'
        />
      </label>
      <button type="submit" className='Edit-message-button'>Update</button>
      
      {errors.map(err => <div key={err} >x {err}</div>)}
    </form>
  )
}

export default EditMessageForm