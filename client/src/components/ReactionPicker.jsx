import { useSelector, useDispatch } from "react-redux"
import { useState } from 'react'
import { reactionCreate } from '../features/reactionsSlice'

function ReactionPicker({ message }) {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.value)
  const errors = useSelector(state => state.reactions.errors)
  const [selectedReaction, setSelectedReaction] = useState('')

  const options = ['🤙', '🔥', '💀', '❤️']

  const handleSubmit = (e) => {
    e.preventDefault()

    const reaction = {
      message_id: message.id,
      user_id: user.id,
      emotion: selectedReaction
    }

    dispatch(reactionCreate(reaction))
  }

  return (
    <form onSubmit={handleSubmit} className='Reaction-picker'>
      <select
        value={selectedReaction}
        onChange={e => setSelectedReaction(e.target.value)}
        className='Reaction-select'
      >
        <option>-</option>
        {options.map(op => (
          <option key={op} value={op}>{op}</option>
        ))}
      </select>
      <button type='submit' className='Message-button'>➕</button>

      {/* {errors.map(err => <div key={err} >x {err}</div>)} */}
    </form>
  )
}

export default ReactionPicker