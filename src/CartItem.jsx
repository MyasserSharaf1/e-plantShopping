import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from './cartActions'; // Import your action creators

function CartItem({ cartItems, onContinueShopping }) {
    const dispatch = useDispatch();

    const handleUpdateQuantity = (item, quantity) => {
        if (quantity < 1) {
            dispatch(removeItem(item.name)); // Remove item if quantity is less than 1
        } else {
            dispatch(updateQuantity(item.name, quantity)); // Dispatch action to update quantity
        }
    };

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item.name)); // Dispatch action to remove item
    };

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <h3>{item.name}</h3>
                            <img src={item.image} alt={item.name} />
                            <p>{item.description}</p>
                            <p>{item.cost}</p>
                            <input
                                type="number"
                                value={item.quantity || 1} // Default to 1 if quantity is undefined
                                onChange={(e) => handleUpdateQuantity(item, parseInt(e.target.value))}
                                min="1"
                            />
                            <button onClick={() => handleRemoveItem(item)}>Remove</button>
                        </div>
                    ))}
                </div>
            )}
            <button onClick={onContinueShopping}>Continue Shopping</button>
        </div>
    );
}

export default CartItem;
