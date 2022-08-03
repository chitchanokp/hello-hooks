import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';

const randomCat = () => axios.get('https://aws.random.cat/meow')

const App = () => {
  const [count, setCount] = useState(0);
  const [cat, setCat] = useState({})

  useEffect(() => {
    randomCat().then((response) => setCat(response.data))
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>You random {count} cats</p>
        <Button variant="contained"
         
          onClick={() => setCount(count + 1)}
        >
          Click me
        </Button>

        <p>
        <img src={cat.file} alt="Cat" width="256" />
      </p>

      </header>
    </div>
  );
};

export default App;