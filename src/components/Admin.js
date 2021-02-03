import React from "react";
import "./Admin.css";

export default function Admin({ userData }) {
  return (
    <div className="admin">
      {/* <h3>Order History</h3> */}
      {userData.reverse().map((user, i) => {
        return (
          <div key={i} className="adminData">
            <div>
              <h2 className="adminOrderNr">
                Order Number ({userData.length - i})
              </h2>
              <p>Date: {user.date}</p>
              <p>
                Email: <b>{user.email}</b>
              </p>
              <p>
                Name: <b>{user.name}</b>
              </p>
              <p>
                Lastname: <b>{user.lastname}</b>
              </p>
              <p>
                Street: <b>{user.street}</b>
              </p>
              <p>
                City: <b>{user.city}</b>
              </p>
              <h1 className="adminTotal">Total: {user.total} €</h1>
            </div>
            <div>
              {user.orderDetails.map((item, i) => {
                return (
                  <div key={item.id} className="adminOrderItem">
                    <p>
                      {i + 1}) <b>{item.name}</b>
                    </p>
                    <p>Price of one item: {item.oneItemPrice}</p>
                    <p>
                      Number of items: <b>{item.nrOfItems}</b>
                    </p>
                    <p className="adminOrderItemPrice">
                      Price: <b>{item.price}</b> €
                    </p>
                  </div>
                );
              })}
            </div>
            {/* <h1>Total: {user.total} €</h1> */}
          </div>
        );
      })}
    </div>
  );
}
