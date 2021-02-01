import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({ basketItems, total }) {
  return (
    <div className="navbar">
      <Link to="/info">Info</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/">Home</Link>
      <Link to="/cart">
        Cart ({basketItems}). Total: {total} €
      </Link>
    </div>
  );
}
