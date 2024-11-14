import React from 'react';
import {  Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../userContext';
import Erro from '../Helper/Erro';
import style from './loginForm.module.css'
import stylebt from '../Forms/Button.module.css'
import Head from '../Helper/Head';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const {userLogin, error, loading} = React.useContext(UserContext)



  async function handleSubmit(event){
    event.preventDefault();

    if(username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className='animeLeft'>
      <Head title="Login" />
    <h1 className='title'> Login </h1>
    <form className={style.form} onSubmit={handleSubmit}>
      <Input label="Usuario"  type="text" name="username" {...username}/>
      <Input label="Senha" type="password" name="password" {...password}/>
      {loading ? (<Button disabled> Carregando </Button>)  : (<Button> Entrar </Button>)}
      <Erro error={error && "Dados Incorretos."} />
    </form>
    <Link className={style.perdeu} to="/login/perdeu"> Putz! Esqueci a senha </Link>
      <div className={style.cadastro}>
        <h2 className={style.subtitle}> Cadastre-se </h2>
        <p> Novo por aqui? Cadastre-se aqui. </p>
        <Link className={stylebt.button} to='/login/criar'> Cadastro </Link>
      </div>
    </section>
  )
}

export default LoginForm
