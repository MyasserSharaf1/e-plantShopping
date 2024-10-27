import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Reducer to add an item to the cart
    addItem: (state, action) => {
      const { name, quantity, ...itemDetails } = action.payload; // Extract item details

      // Check if the item already exists in the cart
      const existingItem = state.items.find(item => item.name === name);

      if (existingItem) {
        // If it exists, update its quantity
        existingItem.quantity += quantity; // Increment the quantity
      } else {
        // Otherwise, add it to the cart
        state.items.push({ name, quantity, ...itemDetails });
      }
    },

    // Reducer to remove an item from the cart
    removeItem: (state, action) => {
      const itemName = action.payload; // Get the item name from the payload
      // Filter out the item that matches the name
      state.items = state.items.filter(item => item.name !== itemName);
    },

    // Reducer to update the quantity of an item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Extract item name and new quantity
      const item = state.items.find(item => item.name === name); // Find the item

      if (item) {
        // If found, update its quantity
        item.quantity = quantity;
      }
    },
  },
});

// Exporting the actions to use in your components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Exporting the reducer to use in the store
export default CartSlice.reducer;
