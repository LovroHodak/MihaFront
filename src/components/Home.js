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
      {products.map((product) => {
        return (
          <div key={product.id} className="homeProduct">
            <div>
              <img src={product.image} alt={product.name} className="homeImg" />
            </div>

            <div className="homeTitle">
              <b className="homeName">{product.name}</b>
              <b className="homePrice">{product.price} €</b>
            </div>

            
              {/* <button className='homeBtn'>
                <Link to={`/detail/${product.id}`} className='homeLink'>View</Link>
              </button> */}
            
              <Link to={`/detail/${product.id}`} className='homeLink'>
                <button className='homeButton'>View</button>
              </Link>
          </div>
        );
      })}
    </div>
  );
}
