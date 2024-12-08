import React, { useState, useEffect } from 'react';
import '../Styles/Cart.css';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Retrieve cart data from localStorage or initialize it
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((item, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  if (cart.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>
      <ul className="cart-items">
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-info">
              <h3 className="cart-item-title">{item.title}</h3>
              <p className="cart-item-price">${item.price}</p>
              <button onClick={() => removeFromCart(index)} className="cart-item-remove-button">Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <h2>Total: ${calculateTotal()}</h2>
      </div>
    </div>
  );
}

export default Cart;
