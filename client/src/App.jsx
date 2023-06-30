import './App.css'
import React from "react"
import { Routes, Route } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectUser } from "./features/userSlice"
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Groups from './pages/Groups'
import Login from './pages/Login'

function App() {
  const user = useSelector(selectUser)

  if (!user) return <Login />

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/groups" element={<Groups />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App