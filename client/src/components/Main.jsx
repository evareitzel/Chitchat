import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
// import GroupsContainer from '../features/groups/GroupsContainer'
import Login from '../pages/Login'

function Main({ user }) {

  return (
    <Routes>
      <Route path="/" element={<Home user={user} />} /> 
      {/* <Route path="/groups" element={<GroupsContainer />} /> */}
      <Route path='/login' element={<Login/>} />
      {/* <Route path="*" element={<Home user={user} />} /> */}
    </Routes>
  )
}

export default Main
