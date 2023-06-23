import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import Groups from '../pages/Groups'
// import Group from './pages/Group'
import Error from '../pages/Error'

function Nav({ user, onLogout }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout())
  }

  return (
    <Router>
      <nav>
        <Link to="/" className="App-link">🗪 chitchat</Link>
        <Link to="/groups" className="App-link">Groups</Link>
        <button onClick={handleLogout} className="Ghost-button">Logout</button>
      </nav>
      <Routes>
        <Route path="/" element={<Home user={user}/>} /> 
        <Route path="/groups" element={<Groups />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}
export default Nav

// <Link to="/group">Logout</Link>
// <Route path="/group" element={<Group />} />
