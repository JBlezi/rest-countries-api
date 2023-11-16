import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";


const CountryDetail = () => {
  const location = useLocation();
  const country = location.state.country;

  // Fetch country data based on countryName or pass it via state in Link

  return (
    <div className='mx-8 md:mx-16 my-12'>
      <button className='flex items-center space-x-2 px-4 py-2 shadow-lg bg-white my-8'>
        <FaArrowLeft></FaArrowLeft>
        <p>Back</p>
      </button>
      <div>
        <img src={country.flags.png} alt="" className='my-12'/>
        <h1 className='text-2xl font-bold'>{country.name.common}</h1>
        <p><span className='font-semibold'>Native Name:</span> {country.nativename}</p>
        <p><span className='font-semibold'>Population:</span> {country.population}</p>
        <p><span className='font-semibold'>Region</span> {country.region}</p>
        <p><span className='font-semibold'>Subregion:</span> {country.subregion}</p>
        <p><span className='font-semibold'>Capital:</span> {country.capital}</p>
        <br />
        <br />
        <p><span className='font-semibold'>Top Level Domain:</span> {country.tld[0]}</p>
        <p><span className='font-semibold'>Currency:</span> {Object.values(country.currencies).map(c => c.name).join(', ')}</p>
        <p><span className='font-semibold'>Languages:</span> {Object.values(country.languages).join(', ')}</p>
        <br />
        <br />
        <h2 className='text-xl font-semibold'>Border Countries</h2>
        <div className='flex'>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
