import React from "react";

const DescriptionCard = (props) => {
  return (
    <div className="DescCard">
    <h1>{props.title}</h1>
    <h3>{props.desc}</h3>
    </div>
  );
}

export default DescriptionCard;