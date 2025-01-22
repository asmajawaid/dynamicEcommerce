'use client'
import React from 'react'
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-8 max-w-[800px] mx-auto">
      <h1 className="text-xl font-bold">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center my-4">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.title} className="w-20 h-20 rounded-md" />
              <div>
                <h2 className="text-lg font-medium">{item.title}</h2>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

    