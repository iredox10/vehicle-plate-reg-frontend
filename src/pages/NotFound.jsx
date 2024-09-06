import React from 'react'
import Header from '../components/Header';

const NotFound = () => {
  return (
    <div>
        <Header />
      <div className="flex justify-center items-center min-h-screen">
        <p className='capitalize font-bold text-4xl text-white  '>page Not Found</p>
      </div>
    </div>
  );
}

export default NotFound