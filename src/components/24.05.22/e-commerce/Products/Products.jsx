import React, { Component } from "react";
import productsData from "../StoreData/store";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ProductsCard from "./ProductCard";
import './Products.css'


class Products extends Component {
  constructor(props) {
    super(props)
    this.state = { products: [] }

  }

  componentDidMount() {
    this.setState({ products: productsData })
  }

  render() {
    const productsCardRender = this.state.products.map((product) => {
      return <ProductsCard
        key={product.id}
        id={product.id}
        img={product.imageUrl}
        title={product.title} />
    })


    return (
      <div className="products-main">
        {productsCardRender}
      </div>
    );
  }
}

export default Products;