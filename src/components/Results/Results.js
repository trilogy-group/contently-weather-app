import React from "react";

function Results(props) {
  return (
    <div>
      <p>Temp is {props.temp}</p>
      <p>Feels like {props.fl}</p>
      <p>Desc :{props.description} </p>
    </div>
  );
}

export default Results;
