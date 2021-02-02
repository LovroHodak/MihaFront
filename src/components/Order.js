import React from "react";

export default function Order({ products, initialState, addUserData, total }) {
  return (
    <div>
      <h2>Order</h2>
      <h3>Your Products: </h3>
      <div>
        {products
          .filter((product) => {
            return product.nrOfItems !== initialState[product.id].nrOfItems;
          })
          .map((item) => {
            return (
              <div key={item.id}>
                <p>Name: {item.name}</p>
                <p>
                  Nr. of Items:
                  <b>{initialState[item.id].nrOfItems - item.nrOfItems}</b>
                </p>
                <p>
                  Price:
                  <b>
                    {(initialState[item.id].nrOfItems - item.nrOfItems) *
                      item.price}
                  </b>
                  €
                </p>
              </div>
            );
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
