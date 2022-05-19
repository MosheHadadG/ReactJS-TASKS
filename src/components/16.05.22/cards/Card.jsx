import React from "react";

const Card = (props) => {
  return (
   <div className="Card">
     <img className="CardImg" alt="img" src={props.image} />
     {props.children}
   </div>
  );
  
}

export default Card;