import { useSelector } from "react-redux" // useDispatch, 
// import { useState } from "react"
// import Dropdown from 'react-dropdown'
// import 'react-dropdown/style.css'
function Reaction({ message }) {
  // const dispatch = useDispatch()
  const user = useSelector(state => state.user.value)
  
  // const [open, setOpen] = useState(false) // React.useState

  // const handleOpen = () => {
  //   setOpen(!open)
  // }

  const options = ['❤️', '🔥', '🏡', '😊']

  const handleReactionSelect = () => {
    console.log('Reaction selected!')
    const newReaction = {
      message_id: message.id,
      user_id: user.id
      // emoji: 'x'
    }
    console.log(newReaction)
    // dispatch(reactionCreate(newReaction))
  }

  return(
    <select onSelect={handleReactionSelect}className='Reaction-select'>
      {options.map(op => (
        <option key={op} value={op}>{op}</option>
      ))}
    </select>
  )
}

export default Reaction