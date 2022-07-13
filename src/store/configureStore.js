import { createSlice, configureStore } from "@reduxjs/toolkit";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
import authReducer from "../reducers/auth";

export default () => {
  // Combine Reducers
  const reducer = {
    expenses: expensesReducer,
    filters: filtersReducer,
    auth: authReducer,
  };

  const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    reducer,
  }); // Store creation
  return store;
};
