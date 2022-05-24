import React from "react";
import './card.css'


const Card = (props) => {
  const { bornBefore } = props;
  const card = bornBefore.map(({ name, birthday, favoriteFoods }) => {
    return (
      <div className="Card">
        <p>name: {name}</p>
        <p>birthday: {birthday}</p>
        <p>
          favorite food:
          <br />
          fishes: {favoriteFoods.fish.map((food) => <span> {food}</span>)}
          <br />
          meats: {favoriteFoods.meats.map((food) => <span> {food}</span>)}
        </p>
        <br />
      </div>
    );
  })


  return (
    <div className="cards">
      {card}
    </div>

  );

}

export default Card;