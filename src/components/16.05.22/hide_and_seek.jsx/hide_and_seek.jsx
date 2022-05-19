import React, {Component} from "react";

class HIDE_AND_SEEK extends Component {
  constructor(props) {
    super(props)
    this.state = {className: "BoxHidden"};
  }


  toggle = () => {
    this.setState(
      {className: this.state.className === "BoxHidden" ? "BoxShow" : "BoxHidden"}
    );
  }
  render() {
    return (
      <div className="OuterBox">
        <button onClick={this.toggle}>Show/Hidden</button>
        <div className={this.state.className}></div>
      </div>

    );
  }
}

export default HIDE_AND_SEEK;