import React, { Component } from "react";

class LifeCycleMethods extends Component {
  state = { favoriteColor: 'Yellow'}

  componentDidMount() {
    setTimeout(() => {
      this.setState({favoriteColor: 'Blue'})
    }, 1000)
  }

  componentDidUpdate() {
    const emptyDiv = document.querySelector('#favorite-color')
    emptyDiv.innerText = `The updated favorite color is ${this.state.favoriteColor}`
  }

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <div id="favorite-color"></div>
      </div>

    );
  }

}

export default LifeCycleMethods;