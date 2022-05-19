import React, { Component } from "react";

class Checkbox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <input type="checkBox" defaultChecked={this.props.isChecked} />
        <label>{this.props.title}</label>
      </div>
    );
  }
}

export default Checkbox;