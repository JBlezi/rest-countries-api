import React from 'react';
import flag from './images/flag_of_Germany.webp'

const Country = () => {

  return (
    <div className="mx-8 md:mx-16 rounded-lg border border-black bg-white">
      <img src={flag} alt="" />
      <div className='p-4'>
        <h2 className='text-2xl font-bold'>Germany</h2>
        <div className='my-4'>
          <p>Population: 80 Million</p>
          <p>Region: Europe</p>
          <p>Capital: Berlin</p>
        </div>
      </div>
    </div>
  );
};

export default Country;
