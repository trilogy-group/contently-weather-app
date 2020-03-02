import React from 'react';


export const CitySearch = (props) => {
  let handleInput = e => props.setCurrentCity(e.target.value);

  return (
      <form onSubmit={(e) => props.handleSubmit(e, props.currentCity)}>
        <input type="text" value={props.currentCity} onChange={handleInput}/>
        <input type="submit" value="Submit" />
      </form>
    );
};