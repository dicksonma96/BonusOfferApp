import './css/style.min.css';
import React from "react";
import {
  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Header from './Component/Header';
import Home from './Pages/Home';
import OnlineCasino from './Pages/OnlineCasino';
import FreeSpin from './Pages/FreeSpin';
import CasinoBonus from './Pages/CasinoBonus';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/online-casinos" component={OnlineCasino}/>
          <Route path="/free-spins" component={FreeSpin}/>
          <Route path="/casino-bonus" component={CasinoBonus}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
