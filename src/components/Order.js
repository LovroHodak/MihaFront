import React from "react";
import './Order.css'

export default function Order({ products, initialState, addUserData, total }) {
  return (
    <div className='order'>
      <div>
        <h3 className='orderSectionName'>Your Products: </h3>
        {products
          .filter((product) => {
            return product.nrOfItems !== initialState[product.id].nrOfItems;
          })
          .map((item, i) => {
            return (
              <div key={item.id} className='orderItem'>
                <h3><i className='orderCountI'>{i + 1}.</i> {item.name}</h3>
                <p>
                  Items: <b>{initialState[item.id].nrOfItems - item.nrOfItems}</b>
                </p>
                <p>
                  Price: <b>
                    {(initialState[item.id].nrOfItems - item.nrOfItems) *
                      item.price}
                  </b> €
                </p>
              </div>
            );
          })}
      </div>
      <div>
        <h3 className='orderSectionName'>Your Info: </h3>
        <form onSubmit={addUserData}>
          <div className='orderUserInfo'>
            <label className='orderUserInfoLabel'>Email </label>
            <input className='orderUserInfoInput' name="email" type="text" />
          </div>

          <div  className='orderUserInfo'>
            <label className='orderUserInfoLabel'>Name </label>
            <input className='orderUserInfoInput' name="name" type="text" />
          </div>
          <div className='orderUserInfo'>
            <label className='orderUserInfoLabel'>Lastname </label>
            <input className='orderUserInfoInput' name="lastname" type="text" />
          </div>
          <div className='orderUserInfo'>
            <label className='orderUserInfoLabel'>Street </label>
            <input className='orderUserInfoInput' name="street" type="text" />
          </div>
          <div className='orderUserInfo'>
            <label className='orderUserInfoLabel'>City </label>
            <input className='orderUserInfoInput' name="city" type="text" />
          </div>
          <button className='orderShipButton' type="submit"><b>Place Order</b></button>
        </form>
        <h1>Total: {total}€</h1>
      </div>
    </div>
  );
}
