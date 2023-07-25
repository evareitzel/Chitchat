import './App.css'
import React, { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectUser, fetchUser } from "./features/userSlice"
import NavBar from './components/NavBar'
import Dashboard from './pages/Dashboard'
import Groups from './pages/Groups'
import Login from './pages/Login'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  if (!user || user.length === 0) return <Login />

  return (
    <div className="App">
      <div className="Wrapper">
        <NavBar />
        <Routes>      
          <Route path="/" element={<Dashboard />} /> 
          <Route path="/groups/*" element={<Groups />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </div>
  )
}

export default App