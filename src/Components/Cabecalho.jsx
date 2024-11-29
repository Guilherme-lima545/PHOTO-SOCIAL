import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import Photo from '../Assets/Photosocial.svg?react';
import { UserContext } from '../userContext';
import UserMedia from '../Hooks/UserMedia';

const Cabecalho = () => {
  const mobile = UserMedia('(max-width: 554px)')
  const { data } = React.useContext(UserContext);
  const [mobileMenu, setMobileMenu] = React.useState(false)


  if(mobile) { 
  return (
  <header key="1" className={styles.headermobi}>
    <Link className={styles.logo} to="/PHOTO-SOCIAL" aria-label='PhotoSocial | Home'> <Photo /> </Link>

    <button 
    aria-label='Menu'
    className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} 
    onClick={() => setMobileMenu(!mobileMenu)}
    ></button>

  <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}> 
  {data ? ( <Link className={styles.login} to="PHOTO-SOCIAL/conta"> 
  {data.nome}
  </Link> ) : (<Link className={styles.login} to="PHOTO-SOCIAL/login"> 
  Usuario / Criar Usuario
  </Link> )}
     
 <Link className={styles.apoie} to="/PHOTO-SOCIAL/apoie"> Apoie Meu trabalho </Link>
  </nav>
  </header>
  )} 
  else { 
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/PHOTO-SOCIAL" aria-label='PhotoSocial | Home'> <Photo /> </Link>
        {data ? ( <Link className={styles.login} to="PHOTO-SOCIAL/conta"> 
        {data.nome}
        </Link> ) : (<Link className={styles.login} to="PHOTO-SOCIAL/login"> 
        Usuario / Criar Usuario
        </Link> )}
     
        <Link className={styles.apoie} to="/PHOTO-SOCIAL/apoie"> Apoie Meu trabalho </Link>
      </nav>
    </header>
  )}
}

export default Cabecalho
