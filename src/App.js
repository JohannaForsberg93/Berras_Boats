import React, { useState } from 'react';
import './App.css';
import { AllBoats } from './components/All-boats';
import { BoatID } from './components/BoatID';
import { Add } from './components/Add';
import { Remove } from './components/Remove';
// import { Search } from './components/Search';

function App() {

  const [state, setState] = useState(false)

  function showText() {
    setState(!state)

  }

  return (
    <div>

      <div>

        <div>
          <h1 className="rubrik">Berras båtar</h1>
          <h3 onClick={showText} className="show">Uppgift</h3>
          <div >
            {state ? <p>Göteborgaren Berra behöver uppgradera sin båtaffär. Han vill ha en webbshop där man kan söka på och köpa båtar. Men innan man kan bygga en frontend vill han ha ett API. Din uppgift är att registrera båtarna i en databas och bygga ett API för det.
      För att Berra ska kunna kontrollera att API:et fungerar som det ska behöver det finnas en databas. För att man inte ska behöva lägga in all data manuellt varje gång man byter server, ska du göra skript som lägger in data i databasen.</p> : null}
          </div>
        </div>

      </div>

      <br>
      </br>
      <AllBoats></AllBoats>
      <Add></Add>
      <BoatID></BoatID>
      <Remove></Remove>

      {/* Frontend för Search-komponenten funkar inte */}
      {/* <Search /> */}

    </div>

  );
}

export default App;