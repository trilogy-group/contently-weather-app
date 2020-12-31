import React from "react";
import "../App.css";
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
