import React from "react";
import { NavLink } from "react-router";
import { Link } from "react-router";

const Header = () => {
  return (
    <div>
      <h2>This is header</h2>
      <nav className="px-5 space-x-6">
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          to="/mobiles"
        >
          Mobiles
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          to="/laptops"
        >
          Laptop
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          to="/users"
        >
          User
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          to="/users2"
        >
          User2
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          to="/posts"
        >
          Posts
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
