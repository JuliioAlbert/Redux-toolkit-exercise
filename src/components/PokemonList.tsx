import React from "react";
import { useSelector } from "react-redux";
import { StoreApp } from "../store/store";

export const PokemonList = () => {
  const { pokemons } = useSelector((state: StoreApp) => state.pokemons);
  return (
    <ul>
      {pokemons.map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  );
};
