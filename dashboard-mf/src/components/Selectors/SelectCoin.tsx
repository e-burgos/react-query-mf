/* eslint-disable max-len */
import React from 'react';
import { CoinFullInfo, Image, Links } from '../../types';
import CoinImage from '../Dropdowns/CoinImage';

type Props = {
  setValue: Function;
  data: CoinFullInfo[] | undefined;
  loading: Boolean;
  setCollapseShow?: Function;
};

export default function SelectCoin({ setValue, data, loading, setCollapseShow }: Props) {


  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    setCollapseShow ? setCollapseShow('hidden') : null;
  }

  return (
    <div className='relative flex w-full flex-wrap items-stretch'>
      <span className='z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3'>
        <i className='fas fa-search'></i>
      </span>
      <select
        className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10'
        onChange={(e) => handleSelect(e)}>
        {loading ? (
          <option>Cargando...</option>
        ) : data ? (
          data.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))
        ) : (
          <option>No es posible obtener datos</option>
        )}
      </select>
    </div>
  );
}
