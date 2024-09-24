import { Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'
import LogIn from './Pages/LogIn'
import SignUp from './Pages/SignUp'
import Home from './Pages/Home'
import { Toaster } from "react-hot-toast";
import { useAuthContext } from './Context/AuthContext'

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/signup' element={authUser ? <Navigate to="/home" /> : <SignUp />} />
        <Route path='/login' element={authUser ? <Navigate to="/home" /> : <LogIn />} />
        <Route path='/home' element={authUser ? <Home /> : <Navigate to='/signup' />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App