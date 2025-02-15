import React, { useEffect } from 'react'
import Input from '../Forms/Input'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button'
import Error from '../Helper/Erro'
import styles from './UserPhotoPost.module.css'
import { useNavigate } from 'react-router-dom'
import Head from '../Helper/Head'
import { useDispatch, useSelector } from 'react-redux'
import { photoPost } from '../../store/Photopost'



const UserPhotoPost = () => {
  const nome = useForm();
  const idade  = useForm("number");
  const [img, setImg] = React.useState({});
  const { data, error, loading } = useSelector(state => state.photo);
  const {token} = useSelector(state => state.token.data)
  const navigate = useNavigate();

  const dispatch = useDispatch()
  

  useEffect(() => {
    if(data) navigate('/PHOTO-SOCIAL/conta');
  }, [data, navigate])

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
  
    
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('idade', idade.value);
    
    

    dispatch(photoPost({formData, token}))
    navigate('/PHOTO-SOCIAL/conta');
  }

  function handleImgChange({target}) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }


  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste tua foto" />
      <form onSubmit={handleSubmit}>
      <Input label="Nome" type="text" name="nome" {...nome}/>
      <Input label="Idade" type="number" name="idade" {...idade}/>
      <input className={styles.file}  type="file" name='img' id='img' onChange={handleImgChange} />
      {loading ? (<Button>Enviando....</Button>) : (<Button>Enviar</Button>)}
      <Error error={error} />   
      </form>
      <div>
        {img.preview && <div className={styles.preview} style={{ backgroundImage: `url('${img.preview}')`}}> </div>}
      </div>
    </section>
  )
}

export default UserPhotoPost
