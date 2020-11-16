import React from "react";
import "../App.css";

// import { ReactComponent as Logo } from "../images/sun.svg";
import WeekWrapper from "./weather-report/WeekWrapper.jsx";
import CitySearch from "./weather-report/CitySearch.jsx";

class App extends React.Component {

  handleZipCodeSelection = (zipCode) => {
    this.setState({zipCode: zipCode});
  }

  handleCityNameSelection = (cityName) => {
    this.setState({cityName: cityName});
  }

  fetchDefaultZipOrParam = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const zipCodeParam = urlParams.get('zipCode');
    if(zipCodeParam) {
      return zipCodeParam
    } else {
      return 10013
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      zipCode: this.fetchDefaultZipOrParam(),
    }

    
  }


  render() {

    return (
      <div className="pt-5">
        <h1 className="mb-3 is-size-2">Weather</h1>
        <CitySearch zipCodeUpdateAction={this.handleZipCodeSelection} zipCode={this.state.zipCode}/>
        { this.state.cityName &&
          <h2 className="mb-4 is-size-3">{ this.state.cityName }</h2>   
        }
        
        <WeekWrapper zipCode={this.state.zipCode} cityNameChangedAction={this.handleCityNameSelection} />
      </div> 
    )
  }
  
  
}

export default App;
