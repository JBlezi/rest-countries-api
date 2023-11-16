import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './Country';
import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";


const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return 'Loading...';
  if (error) return `Error: ${error.message}`;

  const filteredCountries = countries.filter(country =>
    (selectedRegion === 'All' || country.region === selectedRegion) &&
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  return (
    <div className="mx-8 md:mx-16 my-12">
      <div className='relative'>
        <input
          type="text"
          placeholder="         Search for a country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          className="p-2 shadow rounded-md w-full h-16"
        />
        {!isInputFocused && (
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300 opacity-20" />
        )}
      </div>

      <div className="relative w-1/2">
        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="py-2 px-4 shadow rounded-md my-4 h-16 bg-white text-left w-full">
          {selectedRegion}
        <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-300 opacity-50">
          <FaChevronDown></FaChevronDown>
        </div>
        </button>
        {isDropdownOpen && (
          <ul className="absolute z-10 w-full bg-white p-4 shadow">
            {regions.map(region => (
              <li
                key={region}
                onClick={() => { setSelectedRegion(region); setIsDropdownOpen(false); }}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                {region}
              </li>
            ))}
          </ul>
        )}
      </div>

      {filteredCountries.map(country => (
        <Country
          key={country.cca3}
          flag={country.flags.png}
          name={country.name.common}
          population={country.population.toLocaleString()}
          region={country.region}
          capital={country.capital && country.capital[0]}
        />
      ))}
    </div>
  );
};

export default HomePage;
