import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Products.css'




class ProductsCard extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    const { id , img , title } = this.props
    return(
      <div className="product-box">
        <img src={img} alt={title} />
        <h1>{title}</h1>
        <Link to={`/products/${id}`}>More Info</Link>
      </div>
    );
  }
}

export default ProductsCard;