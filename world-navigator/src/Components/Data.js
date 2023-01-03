import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import { CardContent, Typography } from '@mui/material';

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
        return (
          <Card variant="outlined">
            <CardContent>
              <Typography>Name: {item.name.common}</Typography>
              <Typography>Capital: {item.capital}</Typography>
              <Typography>Population: {item.population}</Typography>
              <Typography>Region: {item.region}</Typography>
              <Typography>Sub-Region: {item.subregion}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default Data;
