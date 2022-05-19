import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    return (
      <div>
        <button
          onClick={(e) => this.props.clickedBtn(e.target.innerText)}
          style={{
            background: this.props.background,
            color: "white",
            fontSize: "2rem",
            WebkitTextStroke: "1px black"
          }}
        >
          {this.props.background}
        </button>
      </div>
    );
  };
}

export default Button;