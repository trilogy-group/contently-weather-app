import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchForm from './SearchForm';

//this component will allow route params in the url
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={SearchForm} />
      <Route path="/:params" component={SearchForm} />
    </Switch>
  );
};

export default Routes;
