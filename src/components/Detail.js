import React from "react";

export default function Detail(props) {
  let paramsId = props.match.params.id;

  return (
    <div>
      <h1>In DETAIL</h1>
      <div>
        <p>
          Name: <b>{props.products[paramsId].name}</b>
        </p>
        <p>
          Description: <b>{props.products[paramsId].description}</b>
        </p>
        <p>
          Price: <b>{props.products[paramsId].price}</b> €
        </p>
        <p>
          Stock: <b>{props.products[paramsId].nrOfItems}</b>
        </p>
        <button
          onClick={() => props.handleAddToCart(props.products[paramsId].id)}
        >
          add to basket
        </button>
        {props.products[paramsId].nrOfItems ===
        props.initialState[paramsId].nrOfItems ? (
          <></>
        ) : (
          <button
            onClick={() =>
              props.handleDeleteFromCart(props.products[paramsId].id)
            }
          >
            delete from basket
          </button>
        )}
      </div>
    </div>
  );
}
