import React, { Component } from "react";
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props)

    this.textaraeRef = React.createRef();
  }

  handleFormSumbit = (event) => {
    event.preventDefault();
    this.textaraeRef.current.select();
    document.execCommand('copy')
  }

  render() {
    return (
        <form onSubmit={this.handleFormSumbit} action="">
          <textarea ref={this.textaraeRef} rows={5} cols={50}></textarea>
          <input type="submit" />
        </form>
    );
  }
}

export default Form;