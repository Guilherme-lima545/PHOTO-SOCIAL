import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Feed from '../../Assets/feed.svg?react';
import Dados from '../../Assets/estatisticas.svg?react';
import Add from '../../Assets/adicionar.svg?react';
import Sair from '../../Assets/sair.svg?react';
import styles from "./UserHeaderNav.module.css"
import UserMedia from '../../Hooks/UserMedia';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../store/user';



const UserHeaderNav = () => {
  const dispatch = useDispatch()  
  const navigate = useNavigate();
  const mobile = UserMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false)
  
  const {pathname} = useLocation();
  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  

  function handleLogout() {
    userLogout();
    navigate('/PHOTO-SOCIAL/login')
  }
  
  return (
    <>
    {mobile && 
    <button 
    aria-label='Menu'
    className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} 
    onClick={() => setMobileMenu(!mobileMenu)}
    ></button> } 
    
    <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
      <NavLink to="/PHOTO-SOCIAL/conta" end> <Feed /> {mobile && "Minhas Fotos"} </NavLink>
      <NavLink to="/PHOTO-SOCIAL/conta/estatisticas"> <Dados /> {mobile && "Estatisticas"}  </NavLink>
      <NavLink to="/PHOTO-SOCIAL/conta/postar"> <Add /> {mobile && "Adicionar foto"}  </NavLink>
     <button onClick={() => dispatch(userLogout())}> <Sair /> {mobile && "Sair"} </button>
    </nav>
    </>
  )
}

export default UserHeaderNav
