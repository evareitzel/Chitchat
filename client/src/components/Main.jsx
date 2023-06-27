import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import Groups from '../pages/Groups'
import Login from '../pages/Login'

function Main() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/groups" element={<Groups />} />
      <Route path='/login' element={<Login/>} />
    </Routes>
  )
}

export default Main


      {/* <Route path="*" element={<Home /> */}