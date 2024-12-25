import React from "react";

function Card({ pokemonImg, pokemonName, handleSelectedPokemon }) {
  return (
    <button
      className="card blur-load"
      onClick={() => {
        handleSelectedPokemon(pokemonName);
      }}
    >
      <img src={pokemonImg} alt={pokemonName} loading="lazy" />
    </button>
  );
}

export default Card;
