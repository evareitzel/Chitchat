// import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

import { useSelector } from "react-redux"
import { selectUser } from "../features/user/userSlice"


function NavBar () {
  // ({ onLogout }) { // user needed?
    const user = useSelector(selectUser)
  
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    // }).then(() => onLogout())
    }).then(r => console.log(r))
  }

  return (
    <navbar>
            <h1>🗪 chitchat</h1>
      <p>A place to collaborate 🤔😉</p>

      <nav className="App-header">
      <NavLink to="/" className="App-link">🗪 chitchat</NavLink>
      <NavLink to="/groups" className="App-link">Groups</NavLink>
      <button className="Ghost-button">Logout</button>
      {/* onClick={handleLogout} */}
    </nav>


    </navbar>

  )
}

export default NavBar

// <Link to="/group">Logout</Link>
// <Route path="/group" element={<Group />} />


// if (user) {
//   return (
//     <div className="App">
//       <Header user={user} onLogout={() => setUser(null)} className="App-header" />
//       <Main user={user} />
//     </div>
//   )  
// } else {
//   return <Login onLogin={user => setUser(user)} />
// }
