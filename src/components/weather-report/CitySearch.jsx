import React from "react";

class CitySearch extends React.Component {

  zipCodeSubmit = (event) => {
    event.preventDefault();
    this.props.zipCodeUpdateAction(this.state.zipCode);
    
    window.history.replaceState(null, null, `?zipCode=${this.state.zipCode}`);
  }

  zipCodeChange = (event) => {
    this.setState({zipCode: event.target.value})
  }

  constructor(props) {
    super(props);

    this.state = {
      zipCode: this.props.zipCode,
    }
  }

  
  render() {
    return (
      <div>
        <form onSubmit={this.zipCodeSubmit}>
          <input value={this.state.zipCode} onChange={this.zipCodeChange} type="text" id="zipCode" name="zipCode" autoFocus></input>
          <input  type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default CitySearch;

