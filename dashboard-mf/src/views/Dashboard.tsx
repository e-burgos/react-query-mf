/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
import FetchData from '../components/Fetch/FetchData';
import AdminLayout from '../layouts/AdminLayout';

export default function Dashboard() {
  return (
    <AdminLayout>
      <div className='mt-120'>
        <FetchData title={'Dashboard MF FetchData'} />
      </div>
    </AdminLayout>
  );
}
