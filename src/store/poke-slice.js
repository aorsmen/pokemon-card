import { createSlice } from "@reduxjs/toolkit";

const pokeSlice = createSlice({
  name: 'poke',
  initialState: {},
  reducers: {
    createIndex(state) {
      for(let i = 1; i < 152; i++){
        state[i] = false;
      }
    },
    addCreature(state, action) {
      const data = action.payload;
      state[data.id] = data;
    }
  }
});

export const pokeActions = pokeSlice.actions;

export default pokeSlice.reducer;