import React from "react";
import "./card.css";

function Card({ pokemonImg, pokemonName, handleSelectedPokemon }) {
  return (
    <button
      className="card"
      onClick={() => {
        handleSelectedPokemon(pokemonName);
      }}
    >
      <img src={pokemonImg} alt={pokemonName} />
    </button>
  );
}

export default Card;
