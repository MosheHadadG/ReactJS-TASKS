import React, { Component } from "react";
import './button.css'
class Button extends Component {
  render() {
    return (
      <button onClick={this.props.clickedBtn}>{this.props.name}</button>
    );
  }

}

export default Button;