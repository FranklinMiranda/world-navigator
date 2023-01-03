import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

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

  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
