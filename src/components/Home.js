import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home({
  products,
  initialState,
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
              <Link to={`/detail/${product.id}`}>
                <p>
                  Name: <b>{product.name}</b>
                </p>
              </Link>
              <p>
                Stock: <b>{product.nrOfItems}</b>
              </p>
              <p>
                Price: <b>{product.price} €</b>
              </p>
              <button onClick={() => handleAddToCart(product.id)}>
                add to basket
              </button>
              {product.nrOfItems === initialState[product.id].nrOfItems ? (
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
