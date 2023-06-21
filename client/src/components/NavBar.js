import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import Groups from '../pages/Groups'
// import Group from './pages/Group'
import Error from '../pages/Error'

function NavBar({ user, onLogout }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout())
  }

  return (
    <Router>
      <nav>
        <Link to="/">🗪 chitchat</Link>
        <Link to="/groups">Groups</Link>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <Routes>
        <Route path="/" element={<Home user={user}/>} /> 
        <Route path="/groups" element={<Groups />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}
export default NavBar

// <Link to="/group">Logout</Link>
// <Route path="/group" element={<Group />} />
