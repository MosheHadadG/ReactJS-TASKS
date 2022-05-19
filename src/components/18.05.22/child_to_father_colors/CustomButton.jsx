import React, { Component } from "react";
import Button from "./Button";

const colors = ["blue", "red", "yellow"];

class CustomButton extends Component {
  state = { selectedColor: '' }
  


  printColorName = (color) => {
    this.setState({selectedColor: color})
 
  }

  render() {
    return (
      <div>
        <h1>The color is: {this.state.selectedColor}</h1>
        {colors.map((color) => {
          return <Button clickedBtn={this.printColorName} background={color}/>
        })}

      </div>

    );
  }




}

export default CustomButton;