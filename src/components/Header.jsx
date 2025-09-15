import React from "react";
import { NavLink } from "react-router";
import { Link } from "react-router";

const Header = () => {
  return (
    <div>
      <h2>This is header</h2>
      <nav className="px-5">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-blue-500"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
          to="/mobiles"
        >
          Mobiles
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
          to="/laptops"
        >
          Laptop
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
