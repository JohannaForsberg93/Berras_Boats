import React from 'react';
import './App.css';
// import { Switch, Route, Link } from 'react-router-dom';
import { AllBoats } from './components/All-boats';
import { BoatID } from './components/BoatID';
import { Add } from './components/Add';
import { Remove } from './components/Remove';

function App() {

  return (
    <div>
      <h1>Hej och välkommen till Berras båtar!</h1>
      <br>
      </br>
      {/* <AllBoats></AllBoats>
      <Add></Add>
      <BoatID></BoatID> */}
      <Remove></Remove>

    </div>

  );
}

export default App;