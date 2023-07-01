import './App.css'
import React, { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectUser, fetchUser } from "./features/userSlice"
import NavBar from './components/NavBar'
import Dashboard from './pages/Dashboard'
import Groups from './pages/Groups'
import Login from './pages/Login'
import Group from "./pages/Group"

function App() {
  const user = useSelector(selectUser) // NEW
  const dispatch = useDispatch() // NEW

  console.log(user)

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  if (!user || user.length === 0) return <Login />


  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/groups" element={<Groups />} />
        <Route path='/login' element={<Login />} />
        <Route path="/group" element={<Group />} />
      </Routes>
    </div>
  )
}

export default App


//////////
// , { useEffect }
// import { useSelector } from "react-redux"
// import { selectUser } from "./features/userSlice"
