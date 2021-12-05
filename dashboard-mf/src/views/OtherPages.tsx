/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';

export default function OtherPages() {
  return (  
    <AdminLayout>
      <section className='header relative pt-16 items-center flex h-screen max-h-860-px'>
        <div className='container mx-auto items-center flex flex-wrap'>
          <div className='w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4'>
            <div className='pt-32 sm:pt-0'>
              <h2 className='font-semibold text-4xl text-blueGray-600'>
                Redireccionar a Otros Microfrontends
              </h2>
              <p className='mt-4 text-lg leading-relaxed text-blueGray-500'>
                Es posible desde Dashboard Microfrontend redireccionar a otros microfrontends disponibles, siempre que se llamen desde el host.
              </p>
              <div className='mt-12'>
                <Link
                  to="/landing"
                  className='get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150'
                  >Ir a Landing MF</Link>
                  <Link
                  to="/landing/company"
                  className='get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150'
                  >Ir a Company MF</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}
