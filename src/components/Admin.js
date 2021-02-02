import React from "react";
import "./Admin.css";
import { Link } from "react-router-dom";

export default function Admin({ userData }) {
  return (
    <div>
      <h1>Admin</h1>
      {/* <Link to='/adminAddProducts'><button>Add New Products</button></Link> */}
      <h3>Order History</h3>
      <div>
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
                  Lastname: <b>{user.lastname}</b>
                </p>
                <p>
                  Street: <b>{user.street}</b>
                </p>
                <p>
                  City: <b>{user.city}</b>
                </p>
                <div>
                  {user.orderDetails.map((item) => {
                    return (
                      <div key={item.id}>
                        <p>
                          Product: <b>{item.name}</b>
                        </p>
                        <p>Price of one item: {item.oneItemPrice}</p>
                        <p>
                          Number of items: <b>{item.nrOfItems}</b>
                        </p>
                        <p>
                          Price: <b>{item.price}</b> €
                        </p>
                      </div>
                    );
                  })}
                </div>
                <h1>Total: {user.total} €</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
