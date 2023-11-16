import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './Country';


const HomePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/independent?status=true')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) return 'Loading...';
  if (error) return `Error: ${error.message}`;


  return (
    <div className="mx-8 md:mx-16">
      
      <Country></Country>
      {JSON.stringify(data)}
    </div>
  );
};

export default HomePage;
