/* eslint-disable max-len */
import React from 'react';
import { CoinFullInfo, Image, Links } from '../../types';
import CoinImage from '../Dropdowns/CoinImage';
import SelectCoin from '../Selectors/SelectCoin';

type Props = {
  setValue: Function;
  data: CoinFullInfo[] | undefined;
  image: Image | undefined;
  links: Links | undefined;
  loading: Boolean;
  currentCoin: CoinFullInfo | undefined;
}

export default function Navbar({setValue, data, image, links, loading, currentCoin}: Props) {
  return (
    <>
      {/* Navbar */}
      <nav className='absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4'>
        <div className='w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4'>
          <div className='md:flex hidden flex-row flex-wrap items-center lg:ml-auto w-full mr-3'>
            <SelectCoin 
              setValue={setValue} 
              data={data} 
              loading={loading} 
            />
          </div>
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <CoinImage image={image} links={links} />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
