import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload.attributes;
      const currItem = product
        ? {
            title: product?.title,
            key: product?.key,
            price: product?.price,
            image: product?.image.data.attributes.url,
          }
        : action.payload;
      const index = state.cart.findIndex((item) => item.key === currItem.key);
      //if index==-1, then it means that the product is not there in the cart
      if (index === -1) {
        state.cart.push({ ...currItem, quantity: 1 });
      } else {
        state.cart[index].quantity += 1;
      }
    },
    removeFromCart: (state, action) => {
      const currKey = action.payload?.attributes?.key || action.payload?.key;
      const index = state.cart.findIndex((item) => item.key === currKey);
      if (index === -1) {
        return;
      }
      //if the quantity of that item is ony 1, so after reducing the quantity it should be removoed from the cart
      if (state.cart[index].quantity === 1) {
        state.cart = state.cart.filter((item) => item.key !== currKey);
      } else {
        state.cart[index].quantity -= 1;
      }
    },
    //reset the whole cart if the order is successful
    resetCart: (state, action) => {
      state.cart = []; //resetting the entire cart if the order placed is successful;
    },

    //deleting an item from the cart
    deleteFromCart: (state, action) => {
      const currKey = action.payload?.attributes?.key || action.payload?.key;
      state.cart = state.cart.filter((item) => item.key !== currKey);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, resetCart, deleteFromCart } =
  cartSlice.actions;
