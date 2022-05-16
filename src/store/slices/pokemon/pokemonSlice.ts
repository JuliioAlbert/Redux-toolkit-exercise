import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../../../interfaces";

export interface PokemonState {
  page: number;
  pokemons: Pokemon[];
  isLoading: boolean;
}

const initialState: PokemonState = {
  page: 0,
  pokemons: [],
  isLoading: false,
};

interface PayloadPokemon {
  page: number;
  pokemons: Pokemon[];
}

export const PokemonSlice = createSlice({
  name: "Pokemon",
  initialState,
  reducers: {
    startLoadingPokemon: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action: PayloadAction<PayloadPokemon>) => {
      console.log(action);
      state.isLoading = false;
      state.pokemons = action.payload.pokemons;
      state.page = action.payload.page;
    },
  },
});

export const { setPokemons, startLoadingPokemon } = PokemonSlice.actions;
