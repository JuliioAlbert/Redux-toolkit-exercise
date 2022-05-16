import { Dispatch } from "@reduxjs/toolkit";
import { pokemonApi } from "../../../api/pokemonApi";
import { PokemonResponse } from "../../../interfaces";
import { StoreApp } from "../../store";
import { setPokemons, startLoadingPokemon } from "./pokemonSlice";

export const getPokemons = (page: number = 0) => {
  return async (dispatch: Dispatch, getState: () => StoreApp) => {
    dispatch(startLoadingPokemon());
    const { pokemons } = getState();

    //TODO: Peticcion HTTP

    const { data } = await pokemonApi.get<PokemonResponse>(
      `/pokemon?limit=10&offset=${page * 10}`
    );

    dispatch(setPokemons({ page: page + 1, pokemons: data.results }));
  };
};
