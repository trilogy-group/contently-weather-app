import React, {useState, useEffect} from "react";


function Daily(props){
    const {fahrenheit, celsiusConvert} = props;

  const [weatherData, setWeatherData] = useState([]);
  const [toggle, setToggle] = useState(true);

console.log("props", props)

  
  return (
  <div>
    <h1>
        Daily holder
    </h1>
    <div onClick={() => setToggle(!toggle)}>
        {toggle === true ? `${fahrenheit}` : celsiusConvert(fahrenheit)}
    </div>
  </div>
  )

}

export default Daily;
