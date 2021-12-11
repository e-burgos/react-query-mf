import React, { useEffect, useState } from 'react';
import AdminNavbar from '../components/Navbars/AdminNavbar';
import Sidebar from '../components/Sidebar/Sidebar';
import HeaderStats from '../components/Headers/HeaderStats';
import FooterAdmin from '../components/Footers/FooterAdmin';
import { useQueryCryptoById } from '../utils/useQueryCryptoById';
import { useQueryCryptos } from '../utils/useQueryCryptos';
import { CoinFullInfo, Image, Links } from '../types'

type Props = {
  children: React.ReactNode;
  setlayoutCoin?: Function | undefined;
}

export default function AdminLayout({children, setlayoutCoin}: Props) {

  const [value, setValue] = useState('bitcoin');
  const [coinList, setCoinList] = useState<CoinFullInfo[] | undefined>([]);
  const [coin, setCoin] = useState<CoinFullInfo | undefined>({});
  const [image, setImage] = useState<Image | undefined>({});
  const [links, setLinks] = useState<Links | undefined>({});
  
  const { data: coinResponse, loading: coinLoading, images, allLinks } = useQueryCryptoById(value);
  const { data: coinsResponse, isLoading: coinsLoading } = useQueryCryptos(1, 100);

  useEffect(() => {
    if (coinResponse) {
      setCoinList(coinsResponse);
      setImage(images);
      setCoin(coinResponse);
      setLinks(allLinks);
      setlayoutCoin ? setlayoutCoin(coinResponse) : null;
    };
  }, [coinResponse, coinsResponse]);

  return (
    <>
      <Sidebar 
        setValue={setValue} 
        data={coinList} 
        image={image} 
        links={links}
        currentCoin={coin} 
        loading={coinsLoading} 
      />
      <div className='relative md:ml-64 bg-blueGray-100'>
        <AdminNavbar 
          setValue={setValue} 
          data={coinList} 
          image={image} 
          links={links}
          currentCoin={coin} 
          loading={coinsLoading} 
        />
        {/* Header */}
        <HeaderStats 
          currentCoin={coin} 
          loading={coinLoading}
        />
        <div className='px-4 md:px-10 mx-auto w-full -m-24'>
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
