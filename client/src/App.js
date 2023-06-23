import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
// import Login from './pages/Login'

function App() {
  // const [user, setUser] = useState(null)

  // [-- DEV testing
  const [user, setUser] = useState({ "id": 1, "username": "Momo" })

  useEffect(() => {
    fetch('/user')
    .then(r => r.json())
    .then(r => console.log(`Users: ${r}`))
  }, [])

  // end DEV testing --]


  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then(res => {
  //     if (res.ok) {
  //       res.json().then(user => setUser(user))
  //     }
  //   })
  // }, [])

  // if (user) {
    return (
      <main className="Main">
        <h1>🗪 chitchat</h1>
        <p>Collaborate on projects</p>
        <Nav user={user} onLogout={() => setUser(null)} />
      </main>
    )  
  // } else {
    // return <Login onLogin={user => setUser(user)} />
  // }
}

export default App