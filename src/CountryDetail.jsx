import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
  const { countryName } = useParams();

  // Fetch country data based on countryName or pass it via state in Link

  return (
    <div>
      <h1>Country Detail for {countryName}</h1>
      {/* Display detailed information about the country */}
    </div>
  );
};

export default CountryDetail;
