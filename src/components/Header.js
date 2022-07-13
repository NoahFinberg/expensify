import React from "react";
import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { connect } from "react-redux";

const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify</h1>
    <NavLink
      to="/dashboard"
      className={({ isActive }) => (isActive ? "is-active" : undefined)}
    >
      Dashboard
    </NavLink>
    <NavLink
      to="/create"
      className={({ isActive }) => (isActive ? "is-active" : undefined)}
    >
      Create Expense
    </NavLink>
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
