import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { searchTerm: "New York" };

  onInputChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onCitySubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="search-bar">
        <div className="ui centered row">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="ui fluid action input">
              <input
                type="text"
                placeholder="City Search"
                value={this.state.searchTerm}
                onChange={this.onInputChange}
              />
              <div className="ui button">Search</div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
