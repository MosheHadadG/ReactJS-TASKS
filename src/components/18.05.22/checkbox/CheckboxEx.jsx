import React, { Component } from "react";
import Checkbox from "./Checkbox";

class CheckboxEx extends Component {
  render() {
    return (
      <form>
        <Checkbox title="I read the term of the app" isChecked={false} />
        <Checkbox title="I accept the term of the app" isChecked={false} />
        <Checkbox title="I want to get the weekly news letter" isChecked={true} />
        <Checkbox title="I want to get sales and offers" isChecked={true} />
      </form>



    );
  }
}

export default CheckboxEx;