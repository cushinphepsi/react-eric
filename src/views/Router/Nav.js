import React from "react";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    const activeStyle = {
      backgroundColor: "#eee",
    };
    return (
      <div className="navbar navbar-default">
        <NavLink className="navbar-brand" to="/">
          Title
        </NavLink>
        <ul className="nav navbar-nav">
          <li className="">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/todo"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Todo list
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              User With Axios
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/redux"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Todo With Redux
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Search Youtube
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
