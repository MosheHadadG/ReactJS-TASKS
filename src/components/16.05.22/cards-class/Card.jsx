import React from "react";


class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Card">
      <img className="CardImg" alt="img"src={this.props.image} />
      {this.props.children}
    </div>
    );
  }

}


export default Card;