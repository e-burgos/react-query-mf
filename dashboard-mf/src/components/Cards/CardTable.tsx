/* eslint-disable no-inline-styles/no-inline-styles */
import React from 'react';
import PropTypes from 'prop-types';
import TableDropdown from '../Dropdowns/TableDropdown';
import { useQueryClient } from 'react-query';

type Props = {
  title: string;
  color?: string;
  setPage: Function;
  setCount: Function;
  data: any[];
  count: number;
  page: number;
};

CardTable.defaultProps = {
  color: 'light',
};

CardTable.propTypes = {
  color: PropTypes.oneOf(['light', 'dark']),
};

export default function CardTable({ title, color, setCount, count, setPage, page, data }: Props) {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const itemsPerPage = [10, 20, 30, 40, 50];
  const clientQuery = useQueryClient();

  const handleRefresh = () => {
    clientQuery.resetQueries(['cryptos', page, count]);
  };

  return (
    <>
      <div
        className={
          'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ' +
          (color === 'light' ? 'bg-white' : 'bg-lightBlue-900 text-white')
        }>
        <div className='rounded-t mb-0 px-4 py-3 border-0'>
          <div className='flex flex-wrap items-center'>
            <div className='w-full px-4 max-w-full flex items-center justify-between'>
              <h3 className={'font-bold text-lg ' + (color === 'light' ? 'text-blueGray-700' : 'text-white')}>
                {title}
              </h3>
              <div className='hidden md:flex md:flex-row items-center'>
                {page > 1 && (
                  <span onClick={() => setPage(page - 1)}>
                    <i className='fas fa-arrow-left'></i>
                  </span>
                )}
                <small className='px-4'>
                  Página {page} ({count} items)
                </small>
                {page < 10 && (
                  <span onClick={() => setPage(page + 1)}>
                    <i className='fas fa-arrow-right'></i>
                  </span>
                )}
              </div>
              <div className='md:hidden items-center flex'>
                {page > 1 && (
                  <span onClick={() => setPage(page - 1)}>
                    <i className='fas fa-arrow-left mr-2'></i>
                  </span>
                )}
                {page < 10 && (
                  <span onClick={() => setPage(page + 1)}>
                    <i className='fas fa-arrow-right'></i>
                  </span>
                )}
              </div>
              <div className='flex flex-row ml-2'>
                <div className='hidden md:flex md:flex-row items-center'>
                  <TableDropdown type={'Pagina'} icon={''} setValue={setPage} value={pages} />
                </div>
                <div className='md:hidden items-center flex'>
                  <TableDropdown type={''} icon={'fas fa-list-ol'} setValue={setPage} value={pages} />
                </div>
                <div className='hidden md:flex md:flex-row items-center'>
                  <TableDropdown type={'Items'} icon={''} setValue={setCount} value={itemsPerPage} />
                </div>
                <div className='md:hidden items-center flex'>
                  <TableDropdown type={''} icon={'far fa-caret-square-down'} setValue={setCount} value={itemsPerPage} />
                </div>
                <div
                  className='cursor-pointer text-white font-bold px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150'
                  onClick={() => handleRefresh()}>
                  <i className='fas fa-undo'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='block w-full overflow-x-auto'>
          {/* Projects table */}
          <table className='items-center w-full bg-transparent border-collapse'>
            <thead>
              <tr>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                  }>
                  Moneda
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                  }>
                  Precio Actual
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                  }>
                  Mayor Precio 24hs
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                  }>
                  Menor Precio 24hs
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                  }>
                  % Caída máx. histórico
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                  }>
                  % Cambio Precio
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((coin) => (
                <tr key={coin.id}>
                  <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center'>
                    <img src={coin.image} className='h-12 w-12 bg-white rounded-full border' alt='...'></img>{' '}
                    <span className={'ml-3 font-bold ' + +(color === 'light' ? 'text-blueGray-600' : 'text-white')}>
                      {coin.name}
                    </span>
                  </th>
                  <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                    ${coin.current_price} USD
                  </td>
                  <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                    <i className='fas fa-circle text-teal-500 mr-2'></i> ${coin.high_24h} USD
                  </td>
                  <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                    <i className='fas fa-circle text-red-500 mr-2'></i> ${coin.low_24h} USD
                  </td>
                  <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                    <div className='flex items-center'>
                      <span className='mr-2'>{coin.ath_change_percentage.toFixed(2)}%</span>
                      <div className='relative w-full'>
                        <div className='overflow-hidden h-2 text-xs flex rounded bg-blueGray-200'>
                          <div
                            style={{
                              width: `${
                                coin.ath_change_percentage < 0
                                  ? (-coin.ath_change_percentage).toFixed(0)
                                  : coin.ath_change_percentage.toFixed(0)
                              }% `,
                            }}
                            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center 
                            ${coin.ath_change_percentage < 0 ? 'bg-red-500' : 'bg-teal-500'}`}></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                    <div className='flex items-center'>
                      <span className='mr-2'>{coin.price_change_percentage_24h.toFixed(2)}%</span>
                      <div className='relative w-full'>
                        <div className='overflow-hidden h-2 text-xs flex rounded bg-blueGray-200'>
                          <div
                            style={{
                              width: `${
                                coin.price_change_percentage_24h < 0
                                  ? (-coin.price_change_percentage_24h).toFixed(0)
                                  : coin.price_change_percentage_24h.toFixed(0)
                              }% `,
                            }}
                            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center 
                            ${coin.price_change_percentage_24h < 0 ? 'bg-red-500' : 'bg-teal-500'}`}></div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
