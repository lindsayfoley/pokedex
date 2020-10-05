import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PokemonListings = () => {
  const [data, setData] = useState({});

  async function fetchPokemonData() {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20");
    result
      .json()
      .then((result) => setData(result))
      .catch((err) => console.log(`uh oh, ${err} has occurred!`));
  }

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const characters = data.results;

  return (
    <>
      <h1>Pokemon</h1>
      {characters &&
        characters.map((character) => (
          <Link to={`/pokemon/${character.name}`} key={character.url}>
            <h3>{character.name}</h3>
          </Link>
        ))}
    </>
  );
};

export default PokemonListings;
