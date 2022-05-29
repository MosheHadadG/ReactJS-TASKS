import React, { Component } from "react";
import { Link } from "react-router-dom";
import productsData from "../StoreData/store";
import './Products.css'



class ProductDetail extends Component {
  constructor(props) {
    super(props)
    
    this.state = { product: {} }
  }

  findProduct = () => {
    const getProduct = productsData.find((product) => {
      return product.id.toString() === this.props.match.params.id
    });
    this.setState({ product: getProduct })
  }

  componentDidMount() {
    this.findProduct();
    console.log(this.props)
  }

  render(){
    const { imageUrl, title, price, size} = this.state.product
    return(
      <div className="product-box">
        <h3>Product Detail</h3>
        <img src={imageUrl} alt={title} />
        <h1>{title}</h1> 
        <h4>Price: {price}</h4>
        <h5>Size: {size}</h5>
        <Link to={`/products`}>Back</Link>
      </div>
    );
  }
}

export default ProductDetail;