import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk(
  "ProductSlice/fetchProducts",
  async () => {
    const res = await fetch("http://localhost:8000/products");
    const data = res.json();
    return data;
  }
);
const ProductSlice = createSlice({
  initialState: [],
  name: "ProductSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const { AddToCard } = ProductSlice.actions;
export default ProductSlice.reducer;
