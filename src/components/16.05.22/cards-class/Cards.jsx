import React from "react";
import Card from "./Card";
import DescriptionCard from "./DescriptionCard";
import LinksCard from "./LinksCard";
import faker from "faker";


class CardsClass extends React.Component {
  render() {
    return (
      <div>
      <Card image={faker.image.image()}>
        <DescriptionCard
          title="Random Title"
          desc="Random Description"
        />
        <LinksCard 
        link1="Share"
        link2="Explore"
        />
      </Card>
      <Card image={faker.image.image()}>
        <DescriptionCard
          title="New Title"
          desc="New Description"
        />
        <LinksCard 
        link1="Aprrove"
        link2="Reject"
        />
      </Card>
      <Card image={faker.image.image()}>
        <DescriptionCard
          title="Title 3"
          desc="This Description 3"
        />
        <LinksCard 
        link1="Ok"
        link2="Cancel"
        />
      </Card>
      </div>
    );
  }
}

export default CardsClass;