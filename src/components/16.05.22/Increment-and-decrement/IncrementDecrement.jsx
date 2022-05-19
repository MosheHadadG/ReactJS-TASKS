import React, {Component} from "react";


class IncrementDecrement extends Component {
  constructor(props) {
    super(props)
    this.state = {counter: 0, color: 'black'}
  }

  //* life cycle method
  // first time render this function called
  // componentDidMount() {
  //   console.log('the component show first time!!!')
  // }

  // componentDidUpdate() {
    // every time the state update this function called
  //   console.log(this.state.counter)
  // }

  colorLabel = () => {
    if(this.state.counter > 0) {
      return 'green'
    }
    else if(this.state.counter < 0) {
      return 'red'
    }
  }

  increment = () => {
    if (this.state.counter === 10) return;
    this.setState((prevState) => {
      console.log(prevState)
      return {counter: prevState.counter + 1}
    })
  }

  decrement = () => {
    if (this.state.counter === -10) return;
    this.setState((prevState) => {
      return { counter: prevState.counter - 1}
    })
  }

  render() {
    return (
      <div className="IncrementDecrement">
        <button onClick={this.increment}>+</button>
        <label style={{color: this.colorLabel()}}>{this.state.counter}</label>
        <button onClick={this.decrement}>-</button>
      </div>

    );
  }
}

export default IncrementDecrement;