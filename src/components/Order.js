import React from "react";

export default function Order({ products, initialState, addUserData, total }) {
  return (
    <div>
      <h2>Order</h2>
      <h3>Your Products: </h3>
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
                  <b>
                    {initialState[product.id].nrOfItems - product.nrOfItems}
                  </b>
                </p>
                <p>
                  Price:
                  <b>
                    {(initialState[product.id].nrOfItems - product.nrOfItems) *
                      product.price}
                  </b>
                  €
                </p>
              </div>
            );
          }
        })}
      </div>
      <h1>Total: {total}€</h1>
      <h3>Your Info: </h3>
      <form onSubmit={addUserData} className="orderForm">
        <div>
          <label>Email: </label>
          <input name="email" type="text" />
        </div>

        <div>
          <label>Name: </label>
          <input name="name" type="text" />
        </div>
        <div>
          <label>Lastname: </label>
          <input name="lastname" type="text" />
        </div>
        <div>
          <label>Street: </label>
          <input name="street" type="text" />
        </div>
        <div>
          <label>City: </label>
          <input name="city" type="text" />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
