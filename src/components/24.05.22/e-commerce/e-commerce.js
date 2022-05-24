import React, { Component } from "react";
import Header from "./Header/Header";
import HomePage from "./HomePage/homePage";
import Products from "./Products/Products";
import ProductDetail from "./Products/ProductDetail";
import { BrowserRouter, Route } from "react-router-dom";


class ECommerce extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" exact component={ProductDetail} />
        </BrowserRouter>
   
    );
  }
}

export default ECommerce;