import { Link } from "react-router-dom"

function NavBar({ user, onLogout }) { // user needed?
  
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
