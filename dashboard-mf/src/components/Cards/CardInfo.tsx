/* eslint-disable no-inline-styles/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { CoinFullInfo } from '../../types';
import { stringToHTML } from '../../utils/stringToHTML';

type Props = {
  title?: string;
  color?: string;
  data: CoinFullInfo | undefined;
};

export default function CardInfo({ title, color, data }: Props) {
  const [desc, setDesc] = useState<any>();

  useEffect(() => {
    if (data?.description?.es) {
      setDesc(stringToHTML(data?.description?.es));
    }
  }, [data]);

  return (
    <>
      <div
        className={
          'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ' +
          (color === 'light' ? 'bg-white' : 'bg-lightBlue-900 text-white')
        }>
        <div className='rounded-t px-4 py-2 border-0 mt-2'>
          <div className='flex items-center justify-between text-center'>
            <h3 className={'font-bold text-xl uppercase' + (color === 'light' ? 'text-blueGray-700' : 'text-white')}>
              {title}
            </h3>
            <p className='font-bold text-xl uppercase text-lightBlue-600'>{data?.symbol}</p>
          </div>
        </div>
        <div className='h-0 my-2 border border-solid border-blueGray-100' />
        <div className='flex flex-col px-6 py-6 mb-4 items-center justify-items-center'>
          <div className='mb-8'>{desc}</div>
          <div className='flex flex-row items-center  mb-8'>
            <img
              alt='coin'
              className='w-400 h-400 rounded-full border-none shadow-lg'
              src={!data?.image?.large ? require('../../../assets/img/coin-icon.png') : data?.image?.large}
            />
          </div>
          <div className=' flex flex-row w-full'>
            <a
              href={data?.links?.repos_url?.github ? data?.links?.repos_url.github[0] : '#'}
              className='text-white w-full text-center font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150'
              target='_blank'
              rel='noreferrer'>
              Repositorio
            </a>
            <a
              href={data?.links?.homepage ? data?.links?.homepage[0] : '#'}
              className='get-started w-full text-white text-center font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150'
              target='_blank'
              rel='noreferrer'>
              Sitio Oficial
            </a>
          </div>
          <div className=' flex flex-row w-full'>
            <a
              href={data?.links?.official_forum_url ? data?.links?.official_forum_url[0] : '#'}
              className='get-started w-full text-center text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150'
              target='_blank'
              rel='noreferrer'>
              Foro Oficial
            </a>
            <a
              href={data?.links?.blockchain_site ? data?.links?.blockchain_site[0] : '#'}
              className='get-started w-full text-center text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150'
              target='_blank'
              rel='noreferrer'>
              Tecnologia Blockchain
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
