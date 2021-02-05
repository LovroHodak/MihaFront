import React, { useState, useEffect } from "react";
import "./Detail.css";
import axios from "axios";

export default function Detail2(props) {
  const [product, setProduct] = useState({});

  //this is the same ID as req.params in SERVER
  let paramsId = props.match.params.id;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${paramsId}`, {
        withCredentials: true,
      })
      .then((response) => {
        setProduct(response.data);
      });
  }, [product.nrOfItems]);

  const addToCart = () => {
    props.handleAddToCart(product.id);
    setProduct({ ...product, nrOfItems: product.nrOfItems - 1 });
    props.handleEditAdd(product)
    console.log('product.nrOfItems', product.nrOfItems)
    console.log('products', props.products[product.id].nrOfItems)
    console.log('initial', props.initialState[product.id].nrOfItems)
  };

  const deleteFromCart = () => {
    props.handleDeleteFromCart(product.id);
    setProduct({ ...product, nrOfItems: product.nrOfItems + 1 });
    props.handleEditDelete(product)
    console.log('product.nrOfItems', product.nrOfItems)
    console.log('products', props.products[product.id].nrOfItems)
    console.log('initial', props.initialState[product.id].nrOfItems)
  
  };

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
          In Stock:{" "}
          {props.products
            .filter((product) => {
              return product._id === paramsId;
            })
            .map((item, i) => {
              return <b key={i}>{item.nrOfItems}</b>;
            })}
        </p>

        {props.products.map((product, i) => {
          if (product._id === paramsId && product.nrOfItems > 0) {
            return (
              <button key={i} onClick={addToCart} className="detailBtn">
                Add
              </button>
            );
          }
        })}

        {props.initialState.map((item, i) => {
          if (
            item._id === paramsId &&
             product.nrOfItems  < item.nrOfItems
          ) {
            return (
              <button key={i} onClick={deleteFromCart} className="detailBtn">
                Delete
              </button>
            );
          }
        })}
      </div>
    </div>
  );
}
