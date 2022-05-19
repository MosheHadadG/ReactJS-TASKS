import React, { Component } from "react";
import Spinner from "./Spinner";

class SpinnerApp extends Component {
  state = { displaySpinner: 'flex' }


  componentDidMount() {
    setTimeout(() => {
      this.setState({ displaySpinner: 'none' })
    }, 4000)
  }

  componentDidUpdate() {
   const after4Sec =  document.querySelector('.After4Sec')
   after4Sec.innerText = '4 seconds have passed!!'

  }

  render() {
    return (
      <div>
        <Spinner displaySpinner={this.state.displaySpinner} />
        <div className="After4Sec"></div>
      </div>
    );
  }
}

export default SpinnerApp;