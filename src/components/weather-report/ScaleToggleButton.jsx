import React from "react";

class ScaleToggleButton extends React.Component {
  
  clickAction = (e) => {
    e.preventDefault();
    this.props.clickAction(this.props.scale);
  }

  render() {
    return (
      <button href="#" onClick={this.clickAction} className={this.props.style}>
        { this.props.scale }&#176;
      </button>
    )
  }
}

export default ScaleToggleButton;