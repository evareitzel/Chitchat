
import { useSelector, useDispatch } from "react-redux"
import { selectUser } from "../features/user/userSlice"

function Groups() {
  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  console.log(user.groups)
  
  return(
    <>
      {user.groups.map(g => <h2 key={g.id}>{g.name}</h2>)}
    </>
  )
}

export default Groups