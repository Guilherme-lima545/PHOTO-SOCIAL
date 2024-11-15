import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Cabecalho from './Components/Cabecalho'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Login from './Components/Login/Login'
import './App.css'
import Apoie from './Components/Pix/Apoie'
import { UserStorage } from './userContext'
import User from './Components/Usuario/User'
import ProtectedRoute from './Components/Helper/ProtectedRoute'
import Photo from './Components/photo/Photo'
import UserProfile from './Components/Usuario/UserProfile'
import NotFound from './Components/NotFound'


function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <UserStorage> 
    <Cabecalho />
    <main className='appbody'>
      <Routes>

      <Route path='/' element={<Home />} />
      <Route path='login/*' element={<Login />} />
      <Route path='/apoie' element={<Apoie />} />
      <Route path='conta/*' element={<ProtectedRoute> <User />  </ProtectedRoute>} />
      <Route path='foto/:id' element={<Photo />} />
      <Route path='perfil/:user' element={<UserProfile />} />
      <Route path='*' element={<NotFound />} />
      </Routes>
      </main>
    <Footer />
    </UserStorage> 
    </BrowserRouter>
    </div>
  )
}

export default App
