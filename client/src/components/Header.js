import NavBar from './NavBar'

function Header({ user, onLogout }) {

  return(
    <>
      <h1>🗪 chitchat</h1>
      <p>Collaborate with your teammates</p>
      <NavBar user={user} onLogout={onLogout} />
    </>
  )
}

export default Header