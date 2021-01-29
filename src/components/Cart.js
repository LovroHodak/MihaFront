import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

export default function Cart({
  products,
  initialState,
  handleAddToCart,
  handleDeleteFromCart,
  total,
}) {
  return (
    <div>
      <h1>Cart</h1>
      <div>
        {products.map((product) => {
          if (product.nrOfItems === initialState[product.id].nrOfItems) {
            return <div key={product.id}></div>;
          } else {
            return (
              <div key={product.id}>
                <p>Name: {product.name}</p>
                <p>
                  Nr. of Items:
                  <b>{initialState[product.id].nrOfItems - product.nrOfItems}</b>
                </p>
                <p>
                  Price:
                  <b>
                    {(initialState[product.id].nrOfItems - product.nrOfItems) *
                      product.price}
                  </b>
                  €
                </p>
                <button onClick={() => handleAddToCart(product.id)}>
                  Add To basket
                </button>
                <button onClick={() => handleDeleteFromCart(product.id)}>
                  Delete from basket
                </button>
              </div>
            );
          }
        })}
      </div>
      {products === initialState ? (
        <></>
      ) : (
        <div>
          <h1>Total: {total}€</h1>
          <Link to="/order">
            <button className="orderButton">Order</button>
          </Link>
        </div>
      )}
    </div>
  );
}
