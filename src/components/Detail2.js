import React, { useState, useEffect } from "react";
import "./Detail.css";
import axios from "axios";

export default function Detail(props) {
  const [product, setProduct] = useState({});

  let paramsId = props.match.params.id;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${paramsId}`, {
        withCredentials: true,
      })
      .then((response) => {
        setProduct(response.data);
      });
  }, []);

  return (
    <div className="detail">
      <img src={product.image} alt={product.name} className="detailImg" />
      <div>
        <div className="detailName">
          <h1>{product.name}</h1>
        </div>

        <p>{product.description}</p>
        <p>
          Category: <b>{product.category}</b>
        </p>
        <p>
          Price: <b>{product.price}</b> €
        </p>
        <p>
          In Stock: <b>{product.nrOfItems}</b>
        </p>
        {product.nrOfItems > 0 ? (
            <button onClick={() => props.handleAddToCart(product.id)} className="detailBtn">Add</button>
        ) : (<></>)}
       {/*  {product.nrOfItems > 0 ? (
          <button
            className="detailBtn"
            onClick={() => props.handleAddToCart(product._id)}
          >
            Add
          </button>
        ) : (
          <></>
        )}

        {product.nrOfItems ===
        props.initialState[paramsId].nrOfItems ? (
          <></>
        ) : (
          <button
            className="detailBtn"
            onClick={() =>
              props.handleDeleteFromCart(product._id)
            }
          >
            Remove
          </button>
        )} */}
      </div>
    </div>
  );
}
