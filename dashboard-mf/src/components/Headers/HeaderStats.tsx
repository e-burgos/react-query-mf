import React from 'react';
import { CoinFullInfo } from '../../types';
import CardStats from '../Cards/CardStats';

type Props = {
  currentCoin?: CoinFullInfo | undefined;
  loading?: Boolean;
};

export default function HeaderStats({ currentCoin, loading }: Props) {
  return (
    <>
      {/* Header */}
      <div className='relative bg-lightBlue-600 md:pt-32 pb-32 pt-12'>
        <div className='px-4 md:px-10 mx-auto w-full'>
          <div>
            {loading ? (
              <h3
                className='
                  get-started text-white text-center w-0.5 font-bold px-6 py-4 rounded outline-none 
                  focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase 
                  shadow hover:shadow-lg ease-linear transition-all duration-150'>
                Cargando...
              </h3>
            ) : currentCoin ? (
              <div className='flex flex-wrap'>
                <div className='w-full lg:w-6/12 xl:w-6/12 px-4'>
                  <CardStats
                    statSubtitle='FECHA DE CREACION'
                    statTitle={currentCoin?.genesis_date ? currentCoin?.genesis_date : 'Sin datos'}
                    statPercent={currentCoin.hashing_algorithm ? currentCoin.hashing_algorithm : 'Sin datos'}
                    statArrow='right'
                    statPercentColor='text-red-500'
                    statDescripiron='Algoritmo de Hashing'
                    statIconName='fas fa-baby-carriage'
                    statIconColor='bg-red-500'
                  />
                </div>
                <div className='w-full lg:w-6/12 xl:w-6/12 px-4'>
                  <CardStats
                    statSubtitle='MONEDAS EN CIRCULACION'
                    statTitle={
                      currentCoin.market_data?.circulating_supply
                        ? `${currentCoin.market_data?.circulating_supply.toFixed(2)}`
                        : 'Sin datos'
                    }
                    statPercent={
                      currentCoin.market_data?.max_supply ? `${currentCoin.market_data?.max_supply}` : 'Sin datos'
                    }
                    statArrow='right'
                    statPercentColor='text-emerald-500'
                    statDescripiron='Total de monedas emitidas'
                    statIconName='fas fa-coins'
                    statIconColor='bg-emerald-500'
                  />
                </div>
                <div className='w-full lg:w-6/12 xl:w-6/12 px-4'>
                  <CardStats
                    statSubtitle='PRECIO ACTUAL'
                    statTitle={
                      currentCoin.market_data?.current_price?.usd
                        ? `${currentCoin.market_data?.current_price?.usd} USD`
                        : 'Sin datos'
                    }
                    statArrow={
                      currentCoin?.market_data?.price_change_24h_in_currency?.usd !== undefined &&
                      currentCoin?.market_data?.price_change_24h_in_currency?.usd < 0
                        ? 'down'
                        : 'up'
                    }
                    statPercent={
                      currentCoin.market_data?.price_change_24h_in_currency
                        ? `${currentCoin.market_data?.price_change_24h_in_currency.usd.toFixed(2)} USD`
                        : 'Sin datos'
                    }
                    statPercentColor={
                      currentCoin?.market_data?.price_change_24h_in_currency?.usd !== undefined &&
                      currentCoin?.market_data?.price_change_24h_in_currency?.usd < 0
                        ? 'text-red-500'
                        : 'text-emerald-500'
                    }
                    statDescripiron='Cambio de precio en 24hs'
                    statIconName='fas fa-funnel-dollar'
                    statIconColor='bg-orange-500'
                  />
                </div>
                <div className='w-full lg:w-6/12 xl:w-6/12 px-4'>
                  <CardStats
                    statSubtitle='MARKET CAP RANK'
                    statTitle={currentCoin?.market_cap_rank ? `${currentCoin?.market_cap_rank}` : 'Sin datos'}
                    statArrow='up'
                    statPercent={
                      currentCoin.market_data?.total_volume?.usd
                        ? `$${currentCoin.market_data?.total_volume?.usd}`
                        : 'Sin datos'
                    }
                    statPercentColor='text-emerald-500'
                    statDescripiron='Volumen total en USD'
                    statIconName='fas fa-piggy-bank'
                    statIconColor='bg-lightBlue-500'
                  />
                </div>
              </div>
            ) : (
              <h3
                className='
                  get-started text-white text-center w-0.5 font-bold px-6 py-4 rounded outline-none 
                  focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase 
                  shadow hover:shadow-lg ease-linear transition-all duration-150'>
                No es posible mostrar datos
              </h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
