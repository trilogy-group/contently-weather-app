import React from "react";
import { Dropdown } from "semantic-ui-react";
import "./FormatSelector.css";

const FormatSelector = props => {
  const formatOptions = [
    {
      key: 1,
      text: "Farenheit",
      value: "F"
    },
    {
      key: 2,
      text: "Celsius",
      value: "C"
    }
  ];

  const selectedOption = formatOptions.find(
    option => option.value === props.selectedFormat
  );

  return (
    <div className="ui row format-selector">
      <div className="format-option">
        <Dropdown
          selection
          options={formatOptions}
          onChange={props.onSelectFormat}
          value={selectedOption.value}
        />
      </div>
    </div>
  );
};

export default FormatSelector;
