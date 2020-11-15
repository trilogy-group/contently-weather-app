import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import TopNav from './TopNav';
import '../App.css';

const App = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
    );
}

export default App;
