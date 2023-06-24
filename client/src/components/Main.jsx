import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import GroupsContainer from '../features/groups/GroupsContainer'

function Main({ user }) {

  return (
    <Routes>
      <Route path="/" element={<Home user={user} />} /> 
      <Route path="/groups" element={<GroupsContainer />} />
      {/* <Route path="*" element={<Home user={user} />} /> */}
    </Routes>
  )
}

export default Main
