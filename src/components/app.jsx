import React from "react";
import "../App.css";
import Forcast from './Forcast';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {

   return ( <Router>
      <div>
        <Switch>
          <Route path="/:geoLocation">
            <Forcast />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    )
}

export default App;
