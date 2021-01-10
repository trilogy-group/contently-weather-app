import React from "react";
import { Menu } from "semantic-ui-react";

const Nav = ({ currentView, onViewChange }) => {
  const onClickHandler = (viewName) => {
    onViewChange(viewName);
  };

  const CURRENT_WEATHER = "currentWeather";
  const FIVE_DAY_FORECAST = "fiveDayForecast";

  return (
    <Menu fluid widths={2}>
      <Menu.Item
        name={CURRENT_WEATHER}
        active={currentView === CURRENT_WEATHER}
        onClick={() => onClickHandler(CURRENT_WEATHER)}
      >
        Current Weather
      </Menu.Item>
      <Menu.Item
        name={FIVE_DAY_FORECAST}
        active={currentView === FIVE_DAY_FORECAST}
        onClick={() => onClickHandler(FIVE_DAY_FORECAST)}
      >
        5 Day
      </Menu.Item>
    </Menu>
  );
};

export default Nav;
