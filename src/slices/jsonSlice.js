import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const jsonSlice = createSlice({
  name: "json",
  initialState,
  reducers: {
    addToJson: (state, action) => {
        state.items=[action.payload]
    },
    removeFromBoard: (state, action) => {},
  },
});

export const { addToJson, removeFromJson } = jsonSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectJson = (state) =>{
    return state.json.items;
}

export default jsonSlice.reducer;