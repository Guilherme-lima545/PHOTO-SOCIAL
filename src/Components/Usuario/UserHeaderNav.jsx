import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../../userContext'
import Feed from '../../Assets/feed.svg?react';
import Dados from '../../Assets/estatisticas.svg?react';
import Add from '../../Assets/adicionar.svg?react';
import Sair from '../../Assets/sair.svg?react';
import styles from "./UserHeaderNav.module.css"
import UserMedia from '../../Hooks/UserMedia';



const UserHeaderNav = () => {
  const {userLogout} = React.useContext(UserContext);
  const navigate = useNavigate();
  const mobile = UserMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false)
  
  const {pathname} = useLocation();
  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  

  function handleLogout() {
    userLogout();
    navigate('/login')
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
      <NavLink to="/conta" end> <Feed /> {mobile && "Minhas Fotos"} </NavLink>
      <NavLink to="/conta/estatisticas"> <Dados /> {mobile && "Estatisticas"}  </NavLink>
      <NavLink to="/conta/postar"> <Add /> {mobile && "Adicionar foto"}  </NavLink>
     <button onClick={handleLogout}> <Sair /> {mobile && "Sair"} </button>
    </nav>
    </>
  )
}

export default UserHeaderNav
