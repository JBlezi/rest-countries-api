import React from 'react';
import { useLocation } from 'react-router-dom';

const CountryDetail = () => {
  const location = useLocation();
  const country = location.state.country;

  // Fetch country data based on countryName or pass it via state in Link

  return (
    <div>
      <h1>Country Detail for {country.name.common}</h1>
      {/* Display detailed information about the country */}
    </div>
  );
};

export default CountryDetail;
