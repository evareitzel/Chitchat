import { Routes, Route } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectUser } from "../features/user/userSlice"

import Home from '../pages/Home'
import Groups from '../pages/Groups'
import Login from '../pages/Login'

function Main() {
  // const dispatch = useDispatch()
  const user = useSelector(selectUser)

  return (
    user === null
      ? (
        <Login />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/groups" element={<Groups />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      )

  )
}

export default Main


      // {/* <Route path="*" element={<Home /> */}