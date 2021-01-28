import React from "react";
import "./Home.css";

export default function Home({
  products,
  initalState,
  handleDeleteFromCart,
  handleAddToCart,
}) {
  return (
    <div className="home">
      <h1>Home</h1>
      <div>
        {products.map((product) => {
          return (
            <div key={product.id} className="homeProduct">
              <p>
                Name: <b>{product.name}</b>
              </p>
              <p>
                Stock: <b>{product.nrOfItems}</b>
              </p>
              <button onClick={() => handleAddToCart(product.id)}>
                add to basket
              </button>
              {product.nrOfItems === initalState[product.id].nrOfItems ? (
                <></>
              ) : (
                <button onClick={() => handleDeleteFromCart(product.id)}>
                  delete from basket
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
