import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="logo-wrapper">
        <Link to="/" className="brand-logo" />
      </div>
      <div className="container">
        <ul className="right">
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/cart">My Cart</Link>
          </li>
          <li>
            {/* <Link to="/cart">
              <i className="shopping_cart">shopping_cart</i>
            </Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
