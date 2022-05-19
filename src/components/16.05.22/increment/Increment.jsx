import React, { Component } from "react";

class Increment extends Component {
  constructor() {
    super()
    this.state = { counter: 0 }

  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <div style={{display: 'flex', gap: '10px'}}>
        <button onClick={this.increment}>increment</button>
        <h1>{this.state.counter}</h1>
      </div>
    );
  }
}

export default Increment