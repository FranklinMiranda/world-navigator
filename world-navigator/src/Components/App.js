import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1/all';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const loadRes = async () => {
      const res = await axios.get(BASE_URL);

      console.log(res.data);
      setCountries(res.data);
    };

    loadRes();
  }, []);

  return <div className="App"></div>;
}

export default App;
