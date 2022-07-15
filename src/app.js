import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { firebase, provider, auth } from "./firebase/firebase.js";
import LoadingPage from "./components/LoadingPage.js";
const store = configureStore();

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(store.getState());

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<LoadingPage />);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    root.render(jsx);
    hasRendered = true;
  }
};

auth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    console.log("uid", user.uid);
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    console.log("logged out");
    renderApp();
    history.push("/");
  }
});
