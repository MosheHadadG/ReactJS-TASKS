import React, { Component } from "react";

class Name extends Component {
  render() {
    const namesArr = this.props.name
    const createLiEachPerson = namesArr.map((personName, index) => {
      return <li key={index}>{personName}</li>
    })


    return (
      <ul>
        {createLiEachPerson}
      </ul>

    );
  }
}

export default Name;