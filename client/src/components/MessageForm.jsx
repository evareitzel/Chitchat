import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectUser } from '../features/userSlice'
import { messageCreate } from '../features/messagesSlice'
import { fetchGroups } from '../features/groupsSlice'

function MessageForm({ group }) {
  const dispatch = useDispatch()
  const [userInput, setUserInput] = useState('')
  const user = useSelector(selectUser)
  
  const errors = useSelector(state => state.messages.errors)
  
  const handleSubmitClick = (e) => {
    e.preventDefault()

    const message = {
      user_id: user.id,
      group_id: group.id,
      text: userInput,
      time: new Date()
    }

    dispatch(messageCreate(message))
    // dispatch(fetchGroups()) // update groups in dash and members in Group component

    setUserInput('') // Not clearing input
  }

  return (
    <form onSubmit={handleSubmitClick} className='Form'>
      <label>
        <input
          type="text"
          name="new_message"
          placeholder='New Message'
          onChange={e => setUserInput(e.target.value)}
          className="Input"
        />
      </label>

      {/* breaking app */}
      {errors.map(err => <div key={err} >x {err}</div>)}

      <button type="submit" className='Button'>Send</button>
    </form>
  )
}

export default MessageForm