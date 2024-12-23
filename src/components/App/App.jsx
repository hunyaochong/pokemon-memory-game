import React from "react";
import "./App.css";
import Header from "../Header";
import ScoreBoard from "../Scoreboard";
import CardGrid from "../CardGrid";
import PikachuBoop from "../PikachuBoop";
import loadPokemons from "../../pokemonGenerator";

function App() {
  /* 
    Array of 24 pokemons (2rowsx4columns) -> 4 sets of variations
    pokemonArtworkUrl = [
    {name: "pikachu", artwork: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png"},
    {name: "gastly", artwork: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png"},
    ....
    ]
  */
  const [deck, setDeck] = React.useState([]);
  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
    async function fetchPokemonArtwork() {
      const deck = await loadPokemons();
      setDeck(deck);
    }

    fetchPokemonArtwork();
  }, []);

  return (
    <div className="wrapper">
      <Header></Header>
      <ScoreBoard score={score}></ScoreBoard>
      <CardGrid deck={deck}></CardGrid>
      <PikachuBoop></PikachuBoop>
    </div>
  );
}

export default App;
