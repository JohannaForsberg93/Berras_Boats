import React from 'react';
import './App.css';
// import { Switch, Route, Link } from 'react-router-dom';
import { AllBoats } from './components/All-boats';
import { Search } from './components/Search';
import { Add } from './components/Add';
import { Remove } from './components/Remove';

function App() {

  return (
    <div>
      <h1>Hej och välkommen till Berras båtar!</h1>
      <br>
      </br>
      <AllBoats></AllBoats>
      <Add></Add>
      {/* <Remove></Remove> */}
      {/* <Search></Search> */}
    </div>

  );
}

export default App;