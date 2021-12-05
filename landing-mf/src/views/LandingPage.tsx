/*eslint-disable*/
import React from 'react';
import IndexNavbar from "host/IndexNavbar";
import Footer from "host/FooterSmall";
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <>
      <IndexNavbar fixed />
      <section className='header relative pt-16 items-center flex h-screen max-h-860-px'>
        <div className='container mx-auto items-center flex flex-wrap'>
          <div className='w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4'>
            <div className='pt-32 sm:pt-0'>
              <h2 className='font-semibold text-4xl text-blueGray-600'>
                Micro Landing Page
              </h2>
              <p className='mt-4 text-lg leading-relaxed text-blueGray-500'>
                Un simple ejemplo de una pagina que consume tanto el header con footer del host.
              </p>
              <div className='mt-12'>
                <Link
                  to="/landing/company"
                  className='get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150'
                  >Ir a Company Page <em> (Pagina Interna)</em></Link>
              </div>
            </div>
          </div>
        </div>

        <img
          className='absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px max-w-580-px'
          src={require('../../assets/img/pattern_react.png')}
          alt='...'
        />
      </section>
      <Footer fixed />
    </>
  );
}
