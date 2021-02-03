import React from "react";
import "./Detail.css";

export default function Detail(props) {
  let paramsId = props.match.params.id;

  return (
    <div className="detail">
      <img
        src={props.products[paramsId].image}
        alt={props.products[paramsId].name}
        className="detailImg"
      />
      <div>
        <div className="detailName">
          <h1>{props.products[paramsId].name}</h1>
        </div>

        <p>{props.products[paramsId].description}</p>
        <p>
          Category: <b>{props.products[paramsId].category}</b>
        </p>
        <p>
          Price: <b>{props.products[paramsId].price}</b> €
        </p>
        <p>
          In Stock: <b>{props.products[paramsId].nrOfItems}</b>
        </p>
        {props.products[paramsId].nrOfItems > 0 ? (
          <button
            className="detailBtn"
            onClick={() => props.handleAddToCart(props.products[paramsId].id)}
          >
            Add
          </button>
        ) : (
          <></>
        )}

        {props.products[paramsId].nrOfItems ===
        props.initialState[paramsId].nrOfItems ? (
          <></>
        ) : (
          <button
            className="detailBtn"
            onClick={() =>
              props.handleDeleteFromCart(props.products[paramsId].id)
            }
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
}
