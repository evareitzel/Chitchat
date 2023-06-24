import NavBar from './NavBar'

function Header ({ user, onLogout}) {
  return (
    <div>
      <h1>🗪 chitchat</h1>
      <p>A place to collaborate 🤔😉</p>
      <NavBar user={user} onLogout={onLogout} />
    </div>
  )
}

export default Header