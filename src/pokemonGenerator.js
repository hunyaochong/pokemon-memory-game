import { FIRST_GEN, NUM_OF_POKEMONS } from "./constants";

async function loadPokemons() {
  /* 
    pokemonArtworkUrl = [
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
    ....
    ]
    */
  const response = await fetch("https://pokeapi.co/api/v2/generation");

  if (response.ok) {
    const pokemonGenerationData = await response.json();
    const firstGenPokemonUrl = pokemonGenerationData.results[FIRST_GEN].url;
    const pokemonsArr = await loadPokemonSpecies(firstGenPokemonUrl);
    const pokemonArtworkUrl = generatePokemons(pokemonsArr);

    return pokemonArtworkUrl;
  } else {
    throw new Error("Error in loading pokemon generation API");
  }
}

async function loadPokemonSpecies(url) {
  const response = await fetch(url);

  if (response.ok) {
    const pokedex = await response.json();
    const pokemonSpecies = pokedex.pokemon_species;
    return pokemonSpecies;
  } else {
    throw new Error("Error in loading pokemon generation api");
  }
}

function generatePokemons(pokemonsArr) {
  /*
    pokemons = [
    {name: bulbasaur, url: xxxxx},
    {name: bulbasaur, url: xxxxx},
    ]
    */
  let artworksUrl = [];

  const shuffled = pokemonsArr.sort(() => 0.5 - Math.random());
  const selectedPokemons = shuffled.slice(0, NUM_OF_POKEMONS);

  selectedPokemons.forEach((pokemon) => {
    loadArtwork(pokemon.name, artworksUrl);
  });

  return artworksUrl;
}

async function loadArtwork(name, arr) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (response.ok) {
    const pokemonData = await response.json();
    arr.push(pokemonData.sprites.other["official-artwork"].front_default);
  } else {
    throw new Error(`Error in loading pokemon data`);
  }
}

export default loadPokemons;
