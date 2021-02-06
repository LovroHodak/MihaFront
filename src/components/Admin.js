import React from "react";
import "./Admin.css";

export default function Admin({ userData }) {
  return (
    <div className="admin">
      {userData.map((user, i) => {
        return (
          <div key={i} className="adminData">
            <div>
              <h2 className="adminOrderNr">
                Order Number ({userData.length - i})
              </h2>
              <p>
                Date: <b>{user.date}</b>
              </p>
              <p>
                Email: <b>{user.userEmail}</b>
              </p>
              <p>
                Name: <b>{user.userName}</b>
              </p>
              <p>
                Lastname: <b>{user.userLastName}</b>
              </p>
              <p>
                Street: <b>{user.userStreet}</b>
              </p>
              <p>
                City: <b>{user.userCity}</b>
              </p>
            </div>
            <div>
              {user.orderDetails.map((detail, i) => {
                return (
                  <div key={i} className="adminOrderItem">
                    <p>
                      Product Name: <b>{detail.name}</b>
                    </p>
                    <p>Price of single item: {detail.oneItemPrice}</p>
                    <p>
                      Nr. of items: <b>{detail.nrOfItems}</b>
                    </p>
                    <p className="adminOrderItemPrice">
                      Price: <b>{detail.price}</b> €
                    </p>
                  </div>
                );
              })}
              <h1 className="adminTotal">Total: {user.total} €</h1>
            </div>
          </div>
        );
      })}

      {/*       {userData.reverse().map((user, i) => {
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
          </div>
        );
      })} */}
    </div>
  );
}
