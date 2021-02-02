import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({ basketItems }) {
  return (
    <nav className="navbar">
      <Link to="/info" className='navInfo'>Info</Link>
      <Link to="/" className='navLogo'>Miha Shop</Link>
      <Link to="/cart" className='navCart'>Cart ({basketItems})</Link>
    </nav>
  );
}
