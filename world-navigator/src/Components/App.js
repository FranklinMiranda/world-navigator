import React, {useState, useEffect} from 'react';
import Data from './Data';

const BASE_URL = 'https://restcountries.com/v3.1/all';


function App() {
  return (
    <div className="App">
        <Data/>
    </div>
  );
}

export default App;
