'use client'
import React, { useState, useEffect } from 'react'

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  const handlePrice = () => {
    let ans = 0;
    cart.forEach((item) => {
      ans += item.amount * parseFloat(item.price);
    });
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  },);

  return (
    <article className="w-[90%] max-w-5xl mx-auto mt-10 space-y-6">
      {cart?.length === 0 ? (
        <p className="text-center text-xl text-gray-500">Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
            key={item.id}
          >
            <div className="flex items-center space-x-4">
              <img src={item.img} alt={item.title} className="w-24 h-24 object-cover rounded-lg" />
              <div>
                <p className="font-semibold text-lg text-gray-900">{item.title}</p>
                <p className="text-sm text-gray-900">Qty: {item.amount}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleChange(item, +1)}
                className="bg-green-500 text-white w-8 h-8 rounded-full hover:bg-green-600"
              >
                +
              </button>
              <button
                onClick={() => handleChange(item, -1)}
                className="bg-red-500 text-white w-8 h-8 rounded-full hover:bg-red-600"
              >
                -
              </button>
            </div>

            <div className="text-right space-y-1">
              <p className="text-lg font-medium text-gray-800">Rs {item.price}</p>
              <button
                onClick={() => handleRemove(item.id)}
                className="text-sm text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <div className="text-right mt-8">
          <p className="text-xl font-semibold text-gray-950">Total Price: <span className="text-blue-600">Rs {price}</span></p>
        </div>
      )}
    </article>
  );
};

export default Cart;
