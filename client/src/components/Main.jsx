import { Routes, Route } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectUser } from "../features/userSlice"

import Home from '../pages/Home'
import Groups from '../pages/Groups'
import Login from '../pages/Login'

function Main() {
  const user = useSelector(selectUser)

  // console.log('user from Main component: ')
  // console.log(user)
  // returns null on page refresh - FIX!!!!
  
  if (!user) return <Login />

  return (
    // user === null
    // ? (
    //   <Login />
    // ) : (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/groups" element={<Groups />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    // )
  )
}

export default Main


// {/* <Route path="*" element={<Home /> */}