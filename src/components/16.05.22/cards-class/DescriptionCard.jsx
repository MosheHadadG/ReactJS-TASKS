import React from "react";

class DescriptionCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="DescCard">
      <h1>{this.props.title}</h1>
      <h3>{this.props.desc}</h3>
      </div>
    );
  }
}

export default DescriptionCard;