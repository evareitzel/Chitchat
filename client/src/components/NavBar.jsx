import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectUser } from "./userSlice"


function NavBar({ onLogout }) { // user needed?
    const user = useSelector(selectUser)
  
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout())
  }

  return (
    <nav>
      <Link to="/" className="App-link">🗪 chitchat</Link>
      <Link to="/groups" className="App-link">Groups</Link>
      <button onClick={handleLogout} className="Ghost-button">Logout</button>
    </nav>
  )
}

export default NavBar

// <Link to="/group">Logout</Link>
// <Route path="/group" element={<Group />} />
