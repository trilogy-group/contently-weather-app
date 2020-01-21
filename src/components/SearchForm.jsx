import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setLocation } from '../store/actions';
import { fetchWeather, getGeoLocation } from '../utils';

const Search = props => {
  const { location, fetchWeather, setLocation } = props;

  const handleChange = event => {
    setLocation(event.target.value);
    event.preventDefault();
  };

  const handleSubmit = event => {
    fetchWeather({ cityName: location });
    event.preventDefault();
  };

  //function for dispatching via current location
  const currentLocation = async () => {
    try {
      const { coords } = await getGeoLocation();
      await fetchWeather({
        geo: { lat: coords.latitude, lon: coords.longitude }
      });
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <h3>Search for Current Weather and 5 day forcast</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="input-city"
          placeholder={props.location || 'Enter City Name'}
          value={props.location}
          onChange={handleChange}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              handleSubmit(event);
            }
          }}
        ></input>
        <input className="btn-submit" type="submit" value="Search" />
      </form>
      <div>
        <button className="btn-current" onClick={currentLocation}>
          use current location
        </button>
      </div>
    </div>
  );
};

//adding redux state to props
const mapStateToProps = state => {
  return {
    location: state.location
  };
};

//adding redux dispatch functions to props
const mapDispatchToProps = dispatch => ({
  setLocation: location => dispatch(setLocation(location)),
  fetchWeather: location => dispatch(fetchWeather(location))
});

//connecting react to redux
export default connect(mapStateToProps, mapDispatchToProps)(Search);
