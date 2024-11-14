import React from 'react'
import Head from '../Helper/Head'
import styles from './apoie.module.css'
import qrcode from '../../Assets/qrcode-pix.png'

const Apoie = () => {
  return (
    <div className="container mainContainer animeLeft">
    <Head title="Apoie meu trampo" />
      <h1 className={`${styles.titulo} title`}> Apoie meu trabalho :) </h1>
      <img src={qrcode} alt="Pix" className={styles.pix} />
      <p className={styles.paragrafo}> Se quiser apoiar meu trabalho diretamente em cima há um QR CODE para mandar um pix para mim :), qualquer valor ajuda.
        Não se sinta obrigado a doar, mas caso voce queira fique a vontade XD
      </p>
      
    </div>
  )
}

export default Apoie
