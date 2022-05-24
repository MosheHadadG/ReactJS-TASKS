import React, { Component } from "react";
import Form from "./Form";

class Copy extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Copy to ClipBoard</h1>
        <Form />
      </div>

    );
  }
}

export default Copy;