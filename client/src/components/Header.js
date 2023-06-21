import NavBar from './NavBar'

function Header({ user, onLogout }) {

  return(
    <div className="App-header">
      <h1>🗪 chitchat</h1>
      <p>Collaborate with your teammates</p>
      <NavBar user={user} onLogout={onLogout} />
    </div>
  )
}

export default Header