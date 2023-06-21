import NavBar from './NavBar'

function Header({ user }) {

  return(
    <>
      <h1>🗪 chitchat</h1>
      <p>Collaborate with your teammates</p>
      <NavBar user={user} />
    </>
  )
}

export default Header