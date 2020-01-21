import React from 'react';
import { ReactComponent as Logo } from '../images/sun.svg';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Results from './Results';
import store from '../store';
import '../App.css';

function App() {
  return (
    <Provider store={store}>
      <header>
        <Logo className="logo" />
        <h1>Weather</h1>
      </header>
      <div className="main">
        <h1>Weather</h1>
        <Router>
          <Routes />
          <Results />
        </Router>
      </div>
      <footer />
    </Provider>
  );
}

export default App;
