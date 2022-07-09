import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

// const expense3 = store.dispatch(
//   addExpense({ description: "Rent", amount: "5000", createdAt: 1000 })
// );
// const expense1 = store.dispatch(
//   addExpense({ description: "Water Bill", amount: "1000", createdAt: 100 })
// );
// const expense2 = store.dispatch(
//   addExpense({ description: "Gas Bill", amount: "5000", createdAt: 200 })
// );

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(jsx);
