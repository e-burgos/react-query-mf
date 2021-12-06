import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    text?: string;
}

export default function DashboardSkeleton({text}: Props ) {
  return (  
      <section className='header relative pt-16 items-center flex h-screen max-h-860-px'>
        <div className='container mx-auto items-center flex flex-wrap'>
          <div className='w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4'>
            <div className='pt-32 sm:pt-0'>
              <h2 className='font-semibold text-4xl text-blueGray-600'>
                {text}
              </h2>
              
            </div>
          </div>
        </div>
      </section>
  );
}
