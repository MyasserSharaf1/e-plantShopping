import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Importing the cartReducer from CartSlice.jsx

// Configuring the Redux store
const store = configureStore({
    reducer: {
        cart: cartReducer, // Assigning cartReducer to the cart slice of the state
    },
});

// Exporting the configured store for use in the application
export default store;
