import React from 'react';

type Props = {
  fixed?: boolean;
};

export default function FooterSmall({ fixed }: Props) {
  return (
    <>
      <footer className={(fixed ? 'w-full fixed bottom-0 bg-blueGray-800' : 'relative') + ' pb-2'}>
        <div className='container mx-auto flex-column items-center justify-center'>
          <hr className='mb-2 border-b-1 border-blueGray-600' />

          <div className='w-full'>
            <div className='text-sm text-blueGray-500 font-semibold py-1 text-center'>
              Copyright © {new Date().getFullYear()}{' '}
              <a
                href='https://www.estebanburgos.com.ar'
                target='_blank'
                rel='noreferrer'
                className='text-white hover:text-blueGray-300 text-sm font-semibold py-1'>
                Esteban Burgos
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
