import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import TopNav from './TopNav';
import WeatherContainer from './WeatherContainer';
import '../App.css';

const App = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:city/:unit" component={WeatherContainer} />
      </Switch>
    </BrowserRouter>
    );
}

export default App;
