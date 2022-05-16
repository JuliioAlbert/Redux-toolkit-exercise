import { configureStore } from "@reduxjs/toolkit";

import { counterSlice, CounterState } from "./slices/couter";
import { PokemonSlice, PokemonState } from "./slices/pokemon";

export interface StoreApp {
  counter: CounterState;
  pokemons: PokemonState;
}

export const store = configureStore<StoreApp>({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: PokemonSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
