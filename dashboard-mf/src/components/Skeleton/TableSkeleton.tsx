import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  text: string;
};

export default function TableSkeleton({ text }: Props) {
  return (
    <section className='header items-center flex h-screen'>
      <div className=' mx-auto items-center flex flex-wrap'>
        <div className='w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4'>
          <h2 className='font-semibold text-4xl text-blueGray-600'>{text}</h2>
        </div>
      </div>
    </section>
  );
}
