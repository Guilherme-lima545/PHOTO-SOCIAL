import React from 'react'
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Erro';
import useForm from '../../Hooks/useForm';
import { USER_POST } from '../../api';
import { UserContext } from '../../userContext';
import useFetch from '../../Hooks/useFetch';
import Head from '../Helper/Head';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");

  const {userLogin} = React.useContext(UserContext)
  const {loading, error, request} = useFetch()



   async function criarUsuario(event) {
    event.preventDefault();
    const {url, options} = USER_POST({
      username: username.value, 
      email: email.value, 
      password: password.value, 
    });
    const {response} = await request(url, options);
    if(response.ok) userLogin(username.value, password.value)
  }

  return (
    <section className='animeLeft'>
      <Head title="Criar Conta" />
      <h1 className='title'> Cadrastre-se </h1>
      <form onSubmit={criarUsuario}>
      <Input label="Usuario" type="text" name="username" {...username} />
      <Input label="Email" type="text" name="email" {...email} />
      <Input label="Senha" type="password" name="password" {...password} />
      {loading ? <Button disabled> Cadastrando...... </Button> : <Button> Cadastrar </Button>}

      <Error  error={error} />
      </form>
    </section>
  )
}

export default LoginCreate