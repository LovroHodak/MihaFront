import React from "react";

export default function Order({ products, initalState, addData, total }) {
  return (
    <div>
      <h2>Order</h2>
      <h3>Your Products: </h3>
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
                  Price: <b>{(initalState[product.id].nrOfItems - product.nrOfItems) * product.price}</b> €
                </p>
              </div>
            );
          }
        })}
      </div>
      <h1>Total: {total}€</h1>
      <h3>Your Info: </h3>
      <form onSubmit={addData}>
        <label>Email: </label>
        <input name="email" type="text" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
