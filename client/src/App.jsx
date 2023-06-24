import { useEffect, useState } from 'react'
import './App.css'
import React from "react"
import Header from './components/Header'
import Main from './components/Main'
import Login from './pages/Login'

function App() {
  const [user, setUser] = useState(null)
  // const [user, setUser] = useState({ "id": 1, "username": "Momo" })

  useEffect(() => {
    // auto-login
    fetch("/me").then(res => {
      if (res.ok) {
        res.json().then(user => setUser(user))
      }
    })
  }, [])

  console.log(user)

  if (user) {
    return (
      <div className="App">
        <Header user={user} onLogout={() => setUser(null)} className="App-header" />
        <Main user={user} />
      </div>
    )  
  } else {
    return <Login onLogin={user => setUser(user)} />
  }
}

export default App