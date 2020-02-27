import React from "react";
import "./Results.css";

function Results(props) {
  return (
    <div className="container">
      <p>
        Temp is {props.temp} {props.type ? "Fahrenheit" : "Celcius"}{" "}
      </p>
      <p>Feels like {props.fl}</p>
      <p>Desc :{props.description} </p>
      <button onClick={props.changeTmp}>
        Change to {props.type ? "Celcius" : "Fahrenheit"}
      </button>
    </div>
  );
}

export default Results;
