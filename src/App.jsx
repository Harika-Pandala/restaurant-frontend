import { useState } from "react";
import "./App.css";

function App() {
  const foods = [
    { id: 1, name: "Chicken Biryani", price: 180 },
    { id: 2, name: "Veg Biryani", price: 120 },
    { id: 3, name: "Paneer Butter Masala", price: 160 },
    { id: 4, name: "Masala Dosa", price: 70 },
    { id: 5, name: "Chicken Fried Rice", price: 150 },
    { id: 6, name: "Ice Cream", price: 60 },
  ];

  const [cart, setCart] = useState([]);

  function addToCart(food) {
    setCart([...cart, food]);
  }

  function removeFromCart(index) {
    setCart(cart.filter((_, i) => i !== index));
  }

  const total = cart.reduce((sum, food) => sum + food.price, 0);

  return (
    <div className="container">
      <header>
        <h1>🍽️ Restaurant Ordering System</h1>
        <p>Order your favourite food!</p>
      </header>

      <h2>Our Menu</h2>

      <div className="food-list">
        {foods.map((food) => (
          <div className="food-card" key={food.id}>
            <h3>{food.name}</h3>
            <p>Price: ₹{food.price}</p>
            <button onClick={() => addToCart(food)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((food, index) => (
          <div className="cart-item" key={index}>
            <span>{food.name} — ₹{food.price}</span>
            <button onClick={() => removeFromCart(index)}>
              Remove
            </button>
          </div>
        ))
      )}

      <h2>Total Bill: ₹{total}</h2>
    </div>
  );
}

export default App;