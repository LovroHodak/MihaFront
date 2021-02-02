import React from "react";

export default function AdminAddProducts({handleAddNewProducts}) {
  return (
    <div>
      <h1>AdminAddProducts</h1>
      <form onSubmit={handleAddNewProducts} className="orderForm">

        <div>
          <label>Name: </label>
          <input name="name" type="text" />
        </div>
        <div>
          <label>Price: </label>
          <input name="price" type="number" />
        </div>
        <div>
          <label>ImageUrl: </label>
          <input name="imageUrl" type="text" />
        </div>
        <div>
          <label>NrOfItems: </label>
          <input name="nrOfItems" type="number" />
        </div>
        <div>
          <label>Description: </label>
          <input name="description" type="text" />
        </div>
        <div>
          <label>Category: </label>
          <input name="category" type="text" />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
