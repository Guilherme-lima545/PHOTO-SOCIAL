import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'
import { UserContext } from '../../userContext'
import style from './Login.module.css'
import NotFound from '../NotFound'



const Login = () => {
  const {login} = React.useContext(UserContext);

  if(login === true) return <Navigate to="/PHOTO-SOCIAL/conta" />
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
