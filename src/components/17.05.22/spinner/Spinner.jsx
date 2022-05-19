import React, { Component } from "react";

class Spinner extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{display: this.props.displaySpinner}} className="BoxSpinner">
        <div className="Spinner-4">
          <div id="SP-4-A" className="Spinner-4-Part"></div>
          <div id="SP-4-B" className="Spinner-4-Part"></div>
          <div id="SP-4-C" className="Spinner-4-Part"></div>
        </div>
      </div>
    );
  }
}

export default Spinner;