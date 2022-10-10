import { createSlice } from '@reduxjs/toolkit';

const initialState = { cartItems: [], totalCount: 0 };

function addToCart(state, action) {
  // Check if the product exist in the products
  const existingItem = state.cartItems.find(
    (item) => item.product.slug === action.payload.product.slug,
  );

  // If product is not in cart add it into cart
  if (!existingItem) {
    state.cartItems.push({
      product: action.payload.product,
      count: action.payload.quantity,
      totalPrice: action.payload.product.price * action.payload.quantity,
    });
    state.totalCount = state.cartItems.length;
  }
  //  else {
  //   // if the product already added in the cart update the product
  //   state.cartItems = state.cartItems.map((item) => {
  //     if (existingItem.product.slug === item.product.slug) {
  //       return {
  //         product: action.payload.product,
  //         count: item.count + 1,
  //         totalPrice: action.payload.product.price * (item.count + 1),
  //       };
  //     }
  //     return item;
  //   });
  // }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart,
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
