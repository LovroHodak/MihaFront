import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

export default function Cart({
  products,
  initalState,
  handleAddToCart,
  handleDeleteFromCart,
  total,
}) {
  return (
    <div>
      <h1>Cart</h1>
      <div>
        {products.map((product) => {
          if (product.nrOfItems === initalState[product.id].nrOfItems) {
            return <div key={product.id}></div>;
          } else {
            return (
              <div key={product.id}>
                <p>Name: {product.name}</p>
                <p>
                  Nr. of Items:
                  <b>{initalState[product.id].nrOfItems - product.nrOfItems}</b>
                </p>
                <p>
                  Price:
                  <b>
                    {(initalState[product.id].nrOfItems - product.nrOfItems) *
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
      {products === initalState ? (
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
