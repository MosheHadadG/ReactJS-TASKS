import React, { Component } from "react";
import './Header.css';
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="Header">
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;