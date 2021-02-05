import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

export default function Cart({
  products,
  initialState,
  handleAddToCart,
  handleDeleteFromCart,
  total,
  handleOrder,
  handleEditAdd,
  handleEditDelete
})

{


  const updateDB = () => {
    console.log('im updating')
    handleOrder()
    /* handleEditAll(products) */
  }

  const addAndUpdate = (product) => {
    handleAddToCart(product.id)
    handleEditAdd(product)
  }

  const deleteAndUpdate = (product) => {
    handleDeleteFromCart(product.id)
    handleEditDelete(product)
  }

  return (
    <div className="cart">
      <div className="cartItems">
        {products
          .filter((product) => {
            return product.nrOfItems !== initialState[product.id].nrOfItems;
          })
          .map((item) => {
            return (
              <div key={item.id} className="cartItem">
                <img src={item.image} alt={item.name} className="cartImg" />

                <div className="cartItemInfo">
                  <Link to={`/detail/${item._id}`} className="cartItemName">
                    <p className="cartItemTitle">{item.name}</p>
                  </Link>

                  <p className="cartItemPrice">
                    Price:{" "}
                    <b>
                      {(initialState[item.id].nrOfItems - item.nrOfItems) *
                        item.price}
                    </b>
                    €
                  </p>
                </div>

                <div className="cartAmount">
                  <p className="cartNrOfItems">
                    Nr. of Items:{" "}
                    <b>{initialState[item.id].nrOfItems - item.nrOfItems}</b>
                  </p>
                  <div>
                    {item.nrOfItems > 0 ? (
                      <button
                        className="cartBtn"
                        onClick={() => addAndUpdate(item)}
                      >
                        +
                      </button>
                    ) : (
                      <></>
                    )}

                    <button
                      className="cartBtn"
                      onClick={() => deleteAndUpdate(item)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {products === initialState ? (
        <></>
      ) : (
        <div className="cartOrder">
          <h1 className="cartTotalTitle">
            Total: <b className="cartTotal">{total}</b> €
          </h1>
          <Link to="/order">
            <button onClick={updateDB} className="cartOrderButton">
              Order
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
