import React from 'react';

const Country = (props) => {
  const flag = props.flag;
  const name = props.name;
  const population = props.population;
  const region = props.region;
  const capital = props.capital;

  return (
    <div className="mx-8 md:mx-16 my-12 rounded-md bg-white shadow">
      <img src={flag} alt="" className='rounded-t-md'/>
      <div className='p-4'>
        <h2 className='text-2xl font-bold'>{name}</h2>
        <div className='my-4'>
          <p><span className='font-semibold'>Population:</span> {population}</p>
          <p><span className='font-semibold'>Region:</span> {region}</p>
          <p><span className='font-semibold'>Capital:</span> {capital}</p>
        </div>
      </div>
    </div>
  );
};

export default Country;
