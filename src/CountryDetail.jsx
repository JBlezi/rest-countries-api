import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import axios from 'axios';
import { Link } from 'react-router-dom';



const CountryDetail = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);


  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
      .then(response => {
        setCountry(response.data[0]); // Assuming the API returns an array
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [countryName]); // Dependency on countryName ensures the effect runs when the parameter changes

  useEffect(() => {
    if (country && country.borders) {
      const fetchBorderCountries = async () => {
        const promises = country.borders.map(borderCode =>
          axios.get(`https://restcountries.com/v3.1/alpha/${borderCode}`)
        );
        try {
          const results = await Promise.all(promises);
          const borderNames = results.map(res => res.data[0].name.common);
          setBorderCountries(borderNames);
        } catch (error) {
          console.error('Error fetching border countries', error);
        }
      };

      fetchBorderCountries();
    }
  }, [country]);


  if (loading) return 'Loading...';
  if (error) return `Error: ${error.message}`;
  // Fetch country data based on countryName or pass it via state in Link

  return (
    <div className='mx-8 md:mx-16 my-12 dark:text-white'>
      <Link to={`/`}>
        <button className='flex items-center space-x-2 px-4 py-2 shadow-lg bg-white my-8 dark:bg-dark-blue'>
          <FaArrowLeft></FaArrowLeft>
          <p>Back</p>
        </button>
      </Link>
      <div className='md:flex'>
      <div className="md:w-1/2 md:mr-24 my-12">
        <img src={country.flags.png} alt={`${country.name.common} Flag`} className='w-full h-auto'/>
      </div>
        <div className='md:flex md:w-1/2'>
          <div className='md:my-16'>
            <h1 className='text-2xl font-bold mb-8'>{country.name.common}</h1>
            <div className='md:flex'>
              <div className='md:mr-24'>
                <p><span className='font-semibold'>Native Name:</span> {Object.values(country.name.nativeName)[0].official}</p>
                <p><span className='font-semibold'>Population:</span> {country.population}</p>
                <p><span className='font-semibold'>Region</span> {country.region}</p>
                <p><span className='font-semibold'>Subregion:</span> {country.subregion}</p>
                <p><span className='font-semibold'>Capital:</span> {country.capital}</p>
                <br />
                <br />
              </div>
              <div>
                <p><span className='font-semibold'>Top Level Domain:</span> {country.tld[0]}</p>
                <p><span className='font-semibold'>Currency:</span> {Object.values(country.currencies).map(c => c.name).join(', ')}</p>
                <p><span className='font-semibold'>Languages:</span> {Object.values(country.languages).join(', ')}</p>
                <br />
                <br />
              </div>
            </div>
            <div className='md:flex md:items-center md:space-x-8'>
              <h2 className='text-xl font-semibold'>Border Countries</h2>
              <div className='flex flex-wrap'>
                {borderCountries.map((name, index) => (
                  <div key={index} className='px-4 py-2 my-2 mr-2 bg-white shadow-md rounded dark:bg-dark-blue'>
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
