import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import { AllBoats } from './components/All-boats';
import { Search } from './components/Search';
import { Add } from './components/Add';
import { Remove } from './components/Remove';

function App() {
  return (
    <div>
      {/* Gör detta till en meny med ikoner */}
      <nav>
        <ul className="ul-menu">
          {/* Osynlig länk till hem om man skriver /home */}
          <li><Link to="/home"></Link></li>
          <li><Link to="/">Hem</Link></li>
          <li><Link to="/boats" >Hämta alla båtar</Link></li>
          <li><Link to="/search" >Sök</Link></li>
          <li><Link to="/boat/" >Lägg till</Link></li>
          <li><Link to="/boat:id" >Ta bort eller sök</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route exact path="/home" component={Home} ></Route>
        <Route path="/boats" component={AllBoats} ></Route>
        <Route path="/search" component={Search} ></Route>
        <Route path="/boat/" component={Add} ></Route>
        <Route path="/boat:id" component={Remove} ></Route>
      </Switch>
    </div>

  );
}

const Home = () => (
  <div>
    <h1>Välkommen till Berras Båtar!</h1><br></br>
    <nav>
      <ul>
        <li><Link to="/boats" >Hämta alla båtar</Link></li>
        <li><Link to="/boat:id" >Sök eller ta bort</Link></li>
        <li><Link to="/boat/" >Lägg till</Link></li>
        <li><Link to="/boat:id" >Ta bort eller sök</Link></li>
      </ul>
    </nav>
    <Switch>
      <Route path="/boats" component={AllBoats} ></Route>
      <Route path="/boat:id" component={Search} ></Route>
      <Route path="/boat/" component={Add} ></Route>
      <Route path="/boat:id" component={Remove} ></Route>
    </Switch>

  </div>
)





export default App;