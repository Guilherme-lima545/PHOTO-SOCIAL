import React from 'react';
import {  Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import Erro from '../Helper/Erro';
import style from './loginForm.module.css'
import stylebt from '../Forms/Button.module.css'
import Head from '../Helper/Head';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../store/user';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const dispatch = useDispatch();

  const {token, user} = useSelector(state => state)
  const loading = token.loading || user.loading
  const error = token.error || user.error




  async function handleSubmit(event){
    event.preventDefault();

    if(username.validate() && password.validate()) {
     dispatch(userLogin({username: username.value, password: password.value}))
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
    <Link className={style.perdeu} to="/PHOTO-SOCIAL/login/perdeu"> Putz! Esqueci a senha </Link>
      <div className={style.cadastro}>
        <h2 className={style.subtitle}> Cadastre-se </h2>
        <p> Novo por aqui? Cadastre-se aqui. </p>
        <Link className={stylebt.button} to='/PHOTO-SOCIAL/login/criar'> Cadastro </Link>
      </div>
    </section>
  )
}

export default LoginForm
