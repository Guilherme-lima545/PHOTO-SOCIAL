import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useEffect } from 'react'
import Cabecalho from './Components/Cabecalho'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Login from './Components/Login/Login'
import './App.css'
import Apoie from './Components/Pix/Apoie'
import User from './Components/Usuario/User'
import ProtectedRoute from './Components/Helper/ProtectedRoute'
import Photo from './Components/photo/Photo'
import UserProfile from './Components/Usuario/UserProfile'
import NotFound from './Components/NotFound'
import { useDispatch } from 'react-redux'
import { autoLogin } from './store/user'



function App() {
 const dispatch = useDispatch()

 useEffect(() => {
  dispatch(autoLogin())
 }, [dispatch])


  return (
    <div className='App'>
    <BrowserRouter>
    <Cabecalho />
    <main className='appbody'>
      <Routes>

      <Route path='/PHOTO-SOCIAL' element={<Home />} />
      <Route path='/PHOTO-SOCIAL/login/*' element={<Login />} />
      <Route path='/PHOTO-SOCIAL/apoie' element={<Apoie />} />
      <Route path='/PHOTO-SOCIAL/conta/*' element={<ProtectedRoute> <User />  </ProtectedRoute>} />
      <Route path='/PHOTO-SOCIAL/foto/:id' element={<Photo />} />
      <Route path='/PHOTO-SOCIAL/perfil/:user' element={<UserProfile />} />
      <Route path='*' element={<NotFound />} />
      </Routes>
      </main>
    <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App
