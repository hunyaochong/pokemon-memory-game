import React from "react";
import PropTypes from "prop-types";
import Card from "../Card";
import "./cardgrid.css";

import { shuffle } from "../../utils";

function CardGrid({ deck }) {
  const [cardsInUse, setCardsInUse] = React.useState([]);

  // each turn (after a card has been picked), the card is shuffled, then displayed
  React.useEffect(() => {
    const shuffledCards = shuffle(deck);
    setCardsInUse(shuffledCards);
  }, [deck]);

  console.log(`Cards in use:`, { cardsInUse });
  return (
    <main>
      {cardsInUse &&
        cardsInUse.map((card) => (
          <Card
            key={crypto.randomUUID()}
            imgSrc={card.artwork}
            imgAlt={card.name}
          ></Card>
        ))}
    </main>
  );
}

CardGrid.propTypes = {
  deck: PropTypes.array.isRequired,
};

export default CardGrid;
