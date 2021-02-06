import React from "react";

export default function OrderSuccess({ userData }) {
  return (
    <div>
      <h1>Thank you {userData[0].userName} {userData[0].userLastName} for your order!</h1>
    </div>
  );
}
