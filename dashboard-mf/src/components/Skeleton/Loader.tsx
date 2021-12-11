import React from 'react';
import '../../../assets/styles/loader.css';

type Props = {
  text?: string;
};

export default function Loader({ text }: Props) {
  return (
    <section className='header items-center flex h-screen'>
      <div className=' mx-auto items-center flex flex-wrap'>
        <div className='w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4'>
          <div className='div-loader' id='container-loader'>
            <svg viewBox='0 0 100 100'>
              <defs>
                <filter id='shadow'>
                  <feDropShadow dx='0' dy='0' stdDeviation='1.5' floodColor='#0284C7' />
                </filter>
              </defs>
              <circle id='spinner-loader' className='svg-loader' cx='50' cy='50' r='45' />
            </svg>
          </div>
          <h2 className='font-semibold text-4xl text-blueGray-600'>{text}</h2>
        </div>
      </div>
    </section>
  );
}
