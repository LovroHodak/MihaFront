import React from "react";
import "./Admin.css";

export default function Admin({ userData, initialState, data }) {
  return (
    <div>
      <h1>Admin</h1>
      <h3>Order History</h3>
      <div>
        {userData.reverse().map((user, i) => {
          return (
            <div className="userHistoryData" key={i}>
              <p>Date: {user.date}</p>
              <p>
                Email: <b>{user.email}</b>
              </p>
              <p>
                Name: <b>{user.name}</b>
              </p>
              <p>
                Street: <b>{user.street}</b>
              </p>
              <p>
                City: <b>{user.city}</b>
              </p>
            </div>
          );
        })}
      </div>
{/*       <div>
        {initialState.reverse().map((initialProduct) => {
          if (initialProduct.nrOfItems === data[initialProduct.id].nrOfItems) {
            return <div key={initialProduct.id}></div>;
          } else {
            return (
              <div  className="userHistoryData" key={initialProduct.id}>
                <p>Name: {initialProduct.name}</p>
                <p>
                  Nr. of Items:
                  <b>
                    {data[initialProduct.id].nrOfItems -
                      initialProduct.nrOfItems}
                  </b>
                </p>
                <p>
                  Price:
                  <b>
                    {(data[initialProduct.id].nrOfItems -
                      initialProduct.nrOfItems) *
                      initialProduct.price}
                  </b>
                  €
                </p>
              </div>
            );
          }
        })}
      </div> */}
    </div>
  );
}
