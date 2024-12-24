import React from "react";
import PropTypes from "prop-types";
import Card from "../Card";
import "./cardgrid.css";

function CardGrid({ cardsInUse, handleSelectedPokemon }) {
  return (
    <main>
      {cardsInUse &&
        cardsInUse.map((card) => (
          <Card
            key={crypto.randomUUID()}
            pokemonImg={card.artwork}
            pokemonName={card.name}
            handleSelectedPokemon={handleSelectedPokemon}
          ></Card>
        ))}
    </main>
  );
}

export default CardGrid;
