import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
  initialState: [],
  name: "CardSlice",
  reducers: {
    AddToCard: (state, action) => {
      const FindedProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (FindedProduct) {
        FindedProduct.Quantity += 1;
      } else {
        const Product = { ...action.payload, Quantity: 1 };
        state.push(Product);
      }
    },
    RemoveFromCard: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    ClearCard: (state, action) => {
      return [];
    },
  },
});
export const { AddToCard, RemoveFromCard, ClearCard } = CardSlice.actions;
export default CardSlice.reducer;
