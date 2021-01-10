import React from "react";

const UnitCheckbox = ({ onChange, unit }) => {
  return (
    <div className="ui form unit-checkbox">
      <div className="inline fields">
        <label>Unit</label>
        <div className="field">
          <div className="ui radio checkbox">
            <input
              id="fahrenheit"
              type="radio"
              name="unit"
              checked={unit === "imperial" ? "checked" : ""}
              onChange={() => onChange("imperial")}
            />
            <label htmlFor="fahrenheit">Fahrenheit</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input
              id="celsius"
              type="radio"
              name="unit"
              checked={unit === "metric" ? "checked" : ""}
              onChange={() => onChange("metric")}
            />
            <label htmlFor="celsius">Celsius</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitCheckbox;
