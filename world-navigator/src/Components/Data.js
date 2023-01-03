import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1/all';

function Data() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(BASE_URL);

      console.log(response.data);
      setCountries(response.data);
    };

    loadData();
  }, []);
}

export default Data;
