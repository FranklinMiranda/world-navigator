import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';

const BASE_URL = 'https://restcountries.com/v3.1/all';

function Data() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const loadRes = async () => {
      const res = await axios.get(BASE_URL);

      console.log(res.data);
      setCountries(res.data);
    };
    loadRes();
  }, []);

  return (
    <div className="Data">
      {countries.map((item) => {
        return <Card variant="outlined">{item.name.common}</Card>;
      })}
    </div>
  );
}

export default Data;
