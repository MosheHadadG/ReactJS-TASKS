import React from "react";

class LinksCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="LinksCard">
        <a href="/#">{this.props.link1}</a>
        <a href="/#">{this.props.link2}</a>
      </div>
    );
  }
}

export default LinksCard;