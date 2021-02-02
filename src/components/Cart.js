import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

export default function Cart({
  products,
  initialState,
  handleAddToCart,
  handleDeleteFromCart,
  total,
  handleOrder,
}) {
  return (
    <div>
      <h1>Cart</h1>
      <div>
        {products
          .filter((product) => {
            return product.nrOfItems !== initialState[product.id].nrOfItems;
          })
          .map((item) => {
            return (
              <div key={item.id}>
                <p>Name: {item.name}</p>
                <p>
                  Nr. of Items:
                  <b>{initialState[item.id].nrOfItems - item.nrOfItems}</b>
                </p>
                <p>
                  Price:
                  <b>
                    {(initialState[item.id].nrOfItems - item.nrOfItems) *
                      item.price}
                  </b>
                  €
                </p>
                <button onClick={() => handleAddToCart(item.id)}>
                  Add To basket
                </button>
                <button onClick={() => handleDeleteFromCart(item.id)}>
                  Delete from basket
                </button>
              </div>
            );
          })}
      </div>
      {products === initialState ? (
        <></>
      ) : (
        <div>
          <h1>Total: {total}€</h1>
          <Link to="/order">
            <button onClick={handleOrder} className="orderButton">
              Order
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
