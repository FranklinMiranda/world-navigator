import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1/all?fields=name,capital,languages,region,subregion,population';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const loadRes = async () => {
      const res = await axios.get(BASE_URL);
      setCountries(res.data);
    };
    loadRes();
  }, []);

  console.log('Countries', countries);
  return (
    <div className="App">
      {countries.map((item) => {
        return (
          <div className="Country">
            <h1>{item.name.common}</h1>
            <h2>{item.capital}</h2>
            <h3>{item.region}</h3>
            <h3>{item.population}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
