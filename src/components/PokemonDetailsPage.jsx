import React, { useState, useEffect } from "react";

const PokemonDetailsPage = ({ match }) => {
  const [data, setData] = useState({});

  async function fetchPokemonData() {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`);
    result
      .json()
      .then((result) => setData(result))
      .catch((err) => console.log(`uh oh, ${err} has occurred!`));
  }

  useEffect(() => {
    fetchPokemonData();
  }, []);

  return (
    <>
      <h1>{match.params.id}</h1>
      {data.sprites && <img src={data.sprites.front_default} alt="" />}
    </>
  );
};

export default PokemonDetailsPage;
