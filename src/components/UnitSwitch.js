import React from 'react';

export const UnitSwitch = ({unit, setUnit}) =>{
    const handleClick = (e) =>{
        setUnit(e.target.value)
    }
    return(
        <div className="switch-button">
            <button onClick={handleClick} className={unit === 'metric' ? "switch-button-case active-case": "switch-button-case"} value='metric'>C</button>
            <button onClick={handleClick} className={unit === 'imperial' ? "switch-button-case active-case": "switch-button-case"} value='imperial'>F</button>
        </div>
    );
};