import React from 'react'
import Head from '../Helper/Head'
import useFetch from '../../Hooks/useFetch'
import { STATS_GET } from '../../api';
import Loading from '../Helper/Loading';
import Erro from '../Helper/Erro';
const UserStatsGraficos = React.lazy(() => import('./UserStatsGraficos'))

const UserStats = () => {
  const {data, error, loading, request} = useFetch();

  React.useEffect(() => {
    async function getData() {
      const {url, options} = STATS_GET();
      await request(url,options)
    }
    getData();
  }, [request]);

  if(loading) return <Loading />
  if(error) return <Erro error={error} />
  if(data)
  return (
    <React.Suspense fallback={<div></div>}>
      <Head title="Estatíticas" />
      <UserStatsGraficos data={data} />
    </React.Suspense>
  );
  else return null
}

export default UserStats
