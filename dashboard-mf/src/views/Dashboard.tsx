/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import CardInfo from '../components/Cards/CardInfo';
import Loader from '../components/Skeleton/Loader';
import TableSkeleton from '../components/Skeleton/TableSkeleton';
import AdminLayout from '../layouts/AdminLayout';
import { CoinFullInfo } from '../types';

export default function Dashboard() {
  const [coin, setCoin] = useState<CoinFullInfo | undefined>({});
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    if(!coin){
      setLoading(true)
    } else setLoading(false)
  }, [coin]);

  console.log(process.env.REACT_APP_HOST_URL)

  return (
    <AdminLayout setlayoutCoin={setCoin}>
      {loading ? (
        <Loader text={'Cargando...'} />
      ) : 
      coin ? (
        <div className='flex flex-wrap mt-4'>
          <div className='w-full mb-12 px-4'>
            <CardInfo title={`Información General de ${coin.name}`} color='light' data={coin} />
          </div>
        </div>
      ) : null}
    </AdminLayout>
  );
}
