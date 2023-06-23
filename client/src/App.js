import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Login from './pages/Login'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me").then(res => {
      if (res.ok) {
        res.json().then(user => setUser(user))
      }
    })
  }, [])

  if (user) {
    return (
      <main className="Main">
        <h1>🗪 chitchat</h1>
        <p>Collaborate on projects</p>
        <Nav user={user} onLogout={() => setUser(null)} />
      </main>
    )  
  } else {
    return <Login onLogin={user => setUser(user)} />
  }
}

export default App