import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import Photo from '../Assets/Photosocial.svg?react';
import { UserContext } from '../userContext';

const Cabecalho = () => {
  const { data } = React.useContext(UserContext);


  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label='PhotoSocial | Home'> <Photo /> </Link>
        {data ? ( <Link className={styles.login} to="/conta"> 
        {data.nome}
        </Link> ) : (<Link className={styles.login} to="/login"> 
        Usuario / Criar Usuario
        </Link> )}
     
        <Link className={styles.apoie} to="/apoie"> Apoie Meu trabalho </Link>
        
     
      </nav>
    </header>
  )
}

export default Cabecalho
