import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            color: isActive ? "#64ffda" : "#8892b0",
            textDecorationLine: isActive ? "underline" : "none",
          };
        }}
      >
        Page 1
      </NavLink>
      <NavLink
        to="/page2"
        style={({ isActive }) => {
          return {
            color: isActive ? "#64ffda" : "#8892b0",
            textDecorationLine: isActive ? "underline" : "none",
          };
        }}
      >
        Page 2
      </NavLink>
      <NavLink
        to="/page3"
        style={({ isActive }) => {
          return {
            color: isActive ? "#64ffda" : "#8892b0",
            textDecorationLine: isActive ? "underline" : "none",
          };
        }}
      >
        Page 3
      </NavLink>
    </nav>
  );
};

export default Navbar;
