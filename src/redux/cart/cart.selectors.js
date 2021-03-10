import { createSelector } from 'reselect';

// Two types of selectors: input (doesn't use createSelector) and output

// Input selector - Gets whole state and returns a slice of it
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((count, cartItem) => count + cartItem.quantity, 0)
);