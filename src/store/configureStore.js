import { createSlice, configureStore } from "@reduxjs/toolkit";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";

export default () => {
  // Combine Reducers
  const reducer = {
    expenses: expensesReducer,
    filters: filtersReducer,
  };

  const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    reducer,
  }); // Store creation
  return store;
};
