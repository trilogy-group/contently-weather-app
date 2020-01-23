import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Current from './Current';
import Forecast from './Forecast';
import '../stylesheets/results.css';

const Results = props => {
  const { current, forecast } = props.weather;
  const history = useHistory();

  //push history to url
  useEffect(() => {
    if (current) {
      history.push(`/?lat=${current.coord.lat}&lon=${current.coord.lon}`);
    }
  }, [current, history]);

  return (
    <div className="results-page">
      {current ? (
        <div className="results">
          <Current current={current} />
          <Forecast forecast={forecast} />
        </div>
      ) : (
        <div>
          {props.error ? (
            <div>
              <h3>Input Error!</h3>
              <p>
                valid input is city name with optional 2 digit country code
                precided by a comma
              </p>
              <p>example 1: New York</p>
              <p>example 2: New York, US</p>
            </div>
          ) : (
            <h3>Search for results</h3>
          )}
        </div>
      )}
    </div>
  );
};

//mapping redux state to props
const mapStateToProps = state => {
  return {
    weather: state.weather,
    error: state.error
  };
};

export default connect(mapStateToProps)(Results);
