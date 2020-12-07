import React from "react";
import { Redirect } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: "", renderNewCity: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({ city: event.target.value, renderNewCity: false });
  }

  handleSubmit(event) {
    this.setState({ renderNewCity: true });
    event.preventDefault();
  }

  render () {
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit}>
          <label>
            Find weather in your city:
            <input type="text" name="city" value={this.state.city} placeholder="City, State, Country" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.renderNewCity ? <Redirect to={`/${this.state.city}`} /> : null}
      </div>
    );
  }
}

export default Search;
