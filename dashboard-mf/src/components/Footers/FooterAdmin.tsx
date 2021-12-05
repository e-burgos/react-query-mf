import React from 'react';

export default function FooterAdmin() {
  return (
    <>
      <footer className='block py-4'>
        <div className='container mx-auto px-4'>
          <hr className='mb-4 border-b-1 border-blueGray-200' />
          <div className='flex flex-wrap items-center md:justify-between justify-center'>
            <div className='w-full md:w-4/12 px-4'>
              <div className='text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left'>
                Copyright © {new Date().getFullYear()}{' '}
                <a
                  href='https://www.estebanburgos.com.ar'
                  target='_blank'
                  rel='noreferrer'
                  className='text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1'>
                  Esteban Burgos
                </a>
              </div>
            </div>
            <div className='w-full md:w-8/12 px-4'>
              <ul className='flex flex-wrap list-none md:justify-end  justify-center'>
                <li>
                  <a
                    href='https://www.linkedin.com/in/estebanburgos'
                    target='_blank'
                    rel='noreferrer'
                    className='text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3'>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/e-burgos'
                    target='_blank'
                    rel='noreferrer'
                    className='text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3'>
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/creativetimofficial/notus-react/blob/main/LICENSE.md?ref=nr-footer-admin'
                    target='_blank'
                    rel='noreferrer'
                    className='text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3'>
                    MIT License Template
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
