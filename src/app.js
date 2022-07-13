import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "./firebase/firebase.js";

const store = configureStore();

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(store.getState());

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<p>Loading...</p>);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
store.dispatch(startSetExpenses()).then(() => {
  root.render(jsx);
});
