import React, { Component } from "react";
import { data } from "./data.js";
import Name from "./name.jsx";
import Card from "./card/card.jsx";

class DataMassaging extends Component {
  state = {
    names: [],
    bornBefore1990: []
  }


  getNames() {
    const names = data.map((person) => {
      return person.name
    });
    this.setState({ names: names })
  }

  bornBefore1990() {
    const before1990 = data.filter((person) => {
      return person.birthday.slice(-4) >= 1990

    })
    this.setState({ bornBefore1990: before1990 })
  }

  componentDidMount() {
    this.getNames()
    this.bornBefore1990()
  }

  render() {
    return (
      <div className="container">
        <div className="names">
          <Name name={this.state.names} />
        </div>
          <Card 
          bornBefore={this.state.bornBefore1990}
          />

      </div>
    );
  }
}

export default DataMassaging;