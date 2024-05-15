import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItemsSelector, removecart } from "../Redux/Reducers/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(getItemsSelector);

  // Calculate total price
  const total = items.reduce((a, b) => a + b.price, 0);

  const removeFromCart = (id) => {
    dispatch(removecart({ id }));
  };

  return (
    <div className="container mx-auto px-4 py-8 hover:w-full">
      <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>
      {items.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md mb-4 overflow-hidden"
        >
          <div className="flex items-center">
            <img
              className="w-1/4 h-auto object-cover"
              src={product.thumbnail}
              alt={product.title}
            />
            <div className="w-3/4 px-4 py-2">
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-700">Price: ${product.price}</p>
              <p className="text-gray-700">{product.description}</p>
              <button
                onClick={() => removeFromCart(product.id)}
                className="py-1 px-3 bg-red-400 rounded-md m-5 "
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-2">Total:</h2>
        <p className="text-gray-700">Total Items: {items.length}</p>
        <p className="text-gray-700">Total Price: ${total}</p>
      </div>
    </div>
  );
};

export default Cart;
