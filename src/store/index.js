import { configureStore } from "@reduxjs/toolkit";
import pokeSlice from "./poke-slice";

const store = configureStore({
  reducer: {poke: pokeSlice}
});

export default store;