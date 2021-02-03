import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className='footer'>
      <Link to="/admin" className='footerAdmin'><p >Admin</p></Link>
    </div>
  );
}
