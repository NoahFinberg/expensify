import {
  createSlice,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";

export default () => {
  // Combine Reducers
  const reducer = {
    expenses: expensesReducer,
    filters: filtersReducer,
  };

  const store = configureStore({
    reducer,
  }); // Store creation
  return store;
};
