"use client"

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Pokemon from "./components/pokemon.js";
import Input from "./components/Input.js";

export default function Home() {
  const [number, setNumber] = useState(0);
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    if (number > 0) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
        .then((response) => response.json())
        .then((data) => setPokemonData(data))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [number]);

  return (
    <div className={styles.main}>
      <h1>home page</h1>
      <p>Add the number of the pokemon</p>
      <Input
        id="number"
        label="https://pokeapi.co/api/v2/pokemon/"
        type="text"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />
      {pokemonData && <Pokemon data={pokemonData} />}
    </div>
  );
}
