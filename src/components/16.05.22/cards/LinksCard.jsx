import React from "react";

const LinksCard = (props) => {
  return (
    <div className="LinksCard">
      <a href="/#">{props.link1}</a>
      <a href="/#">{props.link2}</a>
    </div>

  );

}

export default LinksCard;