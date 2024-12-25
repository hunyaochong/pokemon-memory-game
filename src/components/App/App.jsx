import React from "react";
import "./App.css";
import Header from "../Header";
import AudioButton from "../AudioButton";
import ScoreBoard from "../Scoreboard";
import CardGrid from "../CardGrid";
import PikachuBoop from "../PikachuBoop";
import loadPokemons from "../../pokemonGenerator";
import { shuffle, checkDistinct } from "../../utils";
import pokemonMusic from "../../assets/pokemon.mp3";

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
  const [cardsInUse, setCardsInUse] = React.useState([]);
  const [score, setScore] = React.useState(0);
  const [bestScore, setBestScore] = React.useState(0);
  const [selectedPokemon, setSelectedPokemon] = React.useState([]);

  function handleSelectedPokemon(name) {
    const nextSelectedPokemon = [...selectedPokemon, name];
    setSelectedPokemon(nextSelectedPokemon);
  }

  React.useEffect(() => {
    async function fetchPokemonArtwork() {
      const deck = await loadPokemons();
      setDeck(deck);
    }

    fetchPokemonArtwork();
  }, []);

  React.useEffect(() => {
    function shuffleDeck() {
      const shuffledCards = shuffle(deck);
      setCardsInUse(shuffledCards);
    }

    shuffleDeck();
  }, [deck, selectedPokemon]);

  React.useEffect(() => {
    function handleScore() {
      if (selectedPokemon.length === 0) return;

      if (checkDistinct(selectedPokemon)) {
        setScore((currentScore) => currentScore + 1);
      } else {
        setScore(0);
        if (score > bestScore) setBestScore(score);
        setSelectedPokemon([]);
      }
    }

    handleScore();
  }, [selectedPokemon]);

  return (
    <div className="wrapper">
      <Header></Header>
      <ScoreBoard score={score} bestScore={bestScore}></ScoreBoard>
      <CardGrid
        cardsInUse={cardsInUse}
        handleSelectedPokemon={handleSelectedPokemon}
      ></CardGrid>
      <PikachuBoop></PikachuBoop>
    </div>
  );
}

export default App;
