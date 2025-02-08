import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'
import style from './Login.module.css'
import NotFound from '../NotFound'
import { useSelector } from 'react-redux'
import Loading from '../Helper/Loading'



const Login = () => {
  const {data, loading} = useSelector(state => state.user)

  if(loading) return <Loading />
  if(data) return <Navigate to="/PHOTO-SOCIAL/conta" />
  return (
    <section className={style.login}>
      <div className={style.forms}> 
     <Routes> 
      <Route path='/' element={<LoginForm />}> </Route>
      <Route path='/criar' element={<LoginCreate />}> </Route>
      <Route path='/perdeu' element={<LoginPasswordLost />}> </Route>
      <Route path='/resetar' element={<LoginPasswordReset />}> </Route>
      <Route path='*' element={<NotFound />}> </Route>
     </Routes>
     </div>

    </section>
  )
}

export default Login
