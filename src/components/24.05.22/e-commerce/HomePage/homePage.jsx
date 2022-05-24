import React, { Component } from "react";
import Header from "../Header/Header";
import { BrowserRouter, Route } from "react-router-dom";

class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <h1>Home Page</h1>
      </div>
    );
  }
}

export default HomePage;