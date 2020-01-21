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
      <h1>Weather</h1>
      <SearchFrom />
      <Results />
    </Provider>
  );
}

export default App;
