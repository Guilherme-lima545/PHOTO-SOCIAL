import React from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Helper/Loading';
import PhotoContent from './PhotoContent';
import Head from '../Helper/Head';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhoto } from './photoredux';

const Photo = () => {
  const {id} = useParams();
 const {loading, error, data} = useSelector(state => state.photo)
 const dispatch = useDispatch()

  React.useEffect(() => {
   dispatch(fetchPhoto(id))
  }, [dispatch, id])

  
    if(error) return <Error error={error} />
    if(loading) return <Loading />
    if (data) return <section className='container maincontainer'>
      <Head title={data.photo.title} />
       <PhotoContent single={true} />
      </section>
    else return null;

};

export default Photo
