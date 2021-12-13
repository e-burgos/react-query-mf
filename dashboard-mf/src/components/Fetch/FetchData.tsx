import * as React from 'react';
import { useState, useEffect } from 'react';
import { useFetch } from '../../utils/useFetchExample';
import DashboardSkeleton from '../Skeleton/DashboardSkeleton';
import Loader from '../Skeleton/Loader';

type Props = {
  title: string;
};

const FetchData = ({ title }: Props) => {
  const [getInfo, setGetInfo] = useState<any>([]);
  const { data, loading, error, setReload } = useFetch();

  useEffect(() => {
    if (data) {
      setGetInfo(data.drinks);
    }
  }, [data]);

  return (
    <div className='border-2 border-solid border-red-200 border-r-8 rounded-lg p-3 text-center'>
      {error ? (
        <DashboardSkeleton text='Upps, we have a error...'/>
      ) : loading ? (
        <Loader text={'Cargando...'} />
      ) : data ? (
        <div className='w-full flex flex-wrap items-center mt-10'>
          <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
            <h3 className='text-3xl mb-2 font-semibold leading-normal'>{title}</h3>
            <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'>
              {getInfo[0].strInstructions}
            </p>

            <button onClick={() => setReload(true)} 
            className='get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150'
              >More Drinks!
            </button>
          </div>

          <div className='w-full md:w-4/12 px-4 mr-auto ml-auto'>
            <div className='relative flex flex-col min-w-0 break-word w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500'>
              <img
                src={getInfo[0].strDrinkThumb}
                alt={getInfo[0].strDrink}
                className='w-full align-middle rounded-t-lg'
              />
              <blockquote className='relative p-8 mb-4'>
                <svg
                  preserveAspectRatio='none'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 583 95'
                  className='absolute left-0 w-full block h-95-px -top-94-px'>
                  <polygon points='-30,95 583,95 583,65' className='text-lightBlue-500 fill-current'></polygon>
                </svg>
                <h4 className='text-xl font-bold text-white'>{getInfo[0].strDrink}</h4>
                <p className='text-md font-light mt-2 text-white'>Name: {getInfo[0].strDrink}</p>
                <p className='text-md font-light mt-2 text-white'>Type: {getInfo[0].strAlcoholic}</p>
                <p className='text-md font-light mt-2 text-white'>Category: {getInfo[0].strCategory}</p>
              </blockquote>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default FetchData;
