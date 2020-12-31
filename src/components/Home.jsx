import React, {useState} from "react";
import { ReactComponent as Logo } from "../images/sun.svg";
import "../App.css";
import Autosuggest from 'react-autosuggest';
import { FaLocationArrow } from 'react-icons/fa';
import { useHistory } from "react-router-dom";
import {fetchCities} from '../utils';



function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

const Home = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const status = (isLoading ? 'Loading...' : 'Type to load suggestions');
  let history = useHistory();

  const getCurrentPosition = () => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  const getSuggestionValue = (suggestion) => {
    history.push(`/${suggestion.latitude},${suggestion.longitude}`);
    return suggestion.name;
  }

  const showPosition = (position) => {
    setIsLoading(false);
    history.push(`/${position.coords.latitude},${position.coords.longitude}`);
  }


  const loadSuggestions = ({value}) => {
    setIsLoading(true);
    fetchCities(value).then(function (response) {
      setIsLoading(false);
      setSuggestions(response.data.data);
    }).catch(function () {
      setIsLoading(false);
    });
  }

  const onChange = (_, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = loadSuggestions

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: "Type a city name",
    value,
    onChange: onChange
  };
  return (
    <>
      <div className="status">
        {status}
      </div>
      <div className="header">
        <div className="logo-container">
          <Logo style={{height: '100px'}} />
        </div>
        <h1>Weather</h1>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
        <button onClick={getCurrentPosition} className="current-location-button"> <FaLocationArrow /> </button>
      </div>
    </>
  );
}

export default Home;
