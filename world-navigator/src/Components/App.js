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
}

export default App;
