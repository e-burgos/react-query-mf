import React, { useEffect, useState } from 'react';
import CardTable from '../components/Cards/CardTable';
import Loader from '../components/Skeleton/Loader';
import TableSkeleton from '../components/Skeleton/TableSkeleton';
import AdminLayout from '../layouts/AdminLayout';
import { useQueryCryptos } from '../utils/useQueryCryptos';

export default function Tables() {
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(10);
  const { data, error, isLoading } = useQueryCryptos(page, count);

  return (
    <AdminLayout>
      { error ? (
        <TableSkeleton text={'Upps temenos un error...'} />
      ) : isLoading ? (
        <Loader text={'Cargando...'} />
      ) : data ? (
        <div className='flex flex-wrap mt-4'>
          <div className='w-full mb-12 px-4'>
            <CardTable 
              title='Cotizaciones Actuales' 
              color='light' 
              setPage={setPage} 
              setCount={setCount} 
              data={data} 
              count={count} 
              page={page} />
          </div>
        </div>
      ) : null}
    </AdminLayout>
  );
}
