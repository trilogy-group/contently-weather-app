import React from 'react';
import { ReactComponent as Logo } from '../images/sun.svg';
import { Provider } from 'react-redux';
import SearchFrom from './SearchForm';
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
        <SearchFrom />
        <Results />
      </div>
      <footer />
    </Provider>
  );
}

export default App;
