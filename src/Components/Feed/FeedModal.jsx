import React, { useEffect } from 'react'
import styles from "./FeedModal.module.css"
import Erro from '../Helper/Erro';
import Loading from '../Helper/Loading';
import PhotoContent from '../photo/PhotoContent';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/ui';



const FeedModal = () => {
  const {modal} = useSelector(state => state.ui)
  const {loading, error, data} = useSelector(state => state.photo)
  const dispatch = useDispatch()
 


  function handleOutsideclick(event) {
    if(event.target === event.currentTarget) dispatch(closeModal());
  }

  useEffect(() => {
    dispatch(closeModal())
  }, [dispatch])

  if(!modal) return null

  return (
    <div className={styles.modal} onClick={handleOutsideclick}>
      {error && <Erro error={error} /> }
      {loading && <Loading /> }
      {data && <PhotoContent />}  
    </div>
  )
}

export default FeedModal
