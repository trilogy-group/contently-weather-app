import React from "react";
import "./Results.css";
import Clouds from "../../images/Clouds.png";

function Results(props) {
  const type = props.type ? "Celcius" : "Fahrenheit";

  return (
    <div className="container">
      <div className="container-info">
        <h2>Daily Weather Report</h2>
        <p>
          Temp is {props.temp} {type}
        </p>
        <img
          style={{ marginRight: "20px" }}
          className="result-img"
          src={require(`../../images/${props.description}.png`)}
        ></img>
        <p>
          Feels like {props.fl} {type}
        </p>
        <p> Description :{props.description} </p>
      </div>
      <h5>
        {props.city}, {props.country}
      </h5>

      {console.log(props.description)}

      <button onClick={props.changeTmp}>
        Change to {props.type ? "Fahrenheit" : "Celcius"}
      </button>
    </div>
  );
}

export default Results;
