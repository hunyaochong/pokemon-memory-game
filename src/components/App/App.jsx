import React from "react";
import "./App.css";
import loadPokemon from "../../pokemonGenerator";

function App() {
  loadPokemon();
  return <div></div>;
}

export default App;
