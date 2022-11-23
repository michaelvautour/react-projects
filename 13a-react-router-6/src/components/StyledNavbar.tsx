import React from "react";
import { NavLink } from "react-router-dom";

const StyledNavbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/"> Home </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => {
          return isActive ? "link active" : "link";
        }}
      >
        About
      </NavLink>
      <NavLink to="/products"> Products </NavLink>
    </nav>
  );
};

export default StyledNavbar;
