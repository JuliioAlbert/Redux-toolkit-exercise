import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PokemonList } from "./components/PokemonList";
import { AppDispatch, StoreApp } from "./store";
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {
  const { isLoading, page } = useSelector((state: StoreApp) => state.pokemons);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const onClick = () => {
    dispatch(getPokemons(page + 1));
  };

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />

      <span>Loading : {isLoading ? "True" : "False"}</span>

      <PokemonList />

      <button disabled={isLoading} onClick={onClick}>
        Next
      </button>
    </>
  );
};
