// import { useEffect, useState } from 'react'
// import Login from './Login'


export default function Navbar({ onLogout }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout())
  }
  
  return (
      <header className="App-header">
        <h1>🗪 chitchat</h1>
        <button onClick={handleLogout}>Logout</button>
        {/* <a className="App-link"></a> */}
        {/* <Login /> */}
      {/* </routes> */}
      {/* <routes> */}
      </header>
  )
}