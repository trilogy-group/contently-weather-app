import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Search from "./search";
import LocalWeather from "./local-weather";
import styles from '../App.css';

export default function App() {
  return (
    <Router className={styles.app}>
      <div className="app">
        <h1>Weather</h1>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/:city" children={<Weather />}></Route>
        </Switch>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <Search className="routes"/>
  );
}

function Weather() {
  let { city } = useParams();
  return (
    <LocalWeather city={city} className="routes"></LocalWeather>
  );
}
