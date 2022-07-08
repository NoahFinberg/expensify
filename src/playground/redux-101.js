import { createSlice, configureStore } from "@reduxjs/toolkit";

// Action generators --> Action objects
//Reducers are pure functions
// - output only defined by input
// - doesn't use or change anything outside of function scope
// - doesn't change state or action

const initialState = { count: 0 };
function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === "counter/increment") {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      count: state.count + action.incrementBy,
    };
  } else if (action.type === "counter/decrement") {
    return {
      ...state,
      // and update the copy with the new value
      count: state.count - action.decrementBy,
    };
  } else if (action.type === "counter/reset") {
    return {
      ...state,
      // and update the copy with the new value
      count: 0,
    };
  } else if (action.type === "counter/set") {
    return {
      ...state,
      count: action.value,
    };
  }
  // otherwise return the existing state unchanged
  return state;
}

const store = configureStore({ reducer: counterReducer });

const increment = ({ incrementBy = 1 } = {}) => {
  return {
    type: "counter/increment",
    incrementBy,
  };
};

const decrement = ({ decrementBy = 1 } = {}) => {
  return {
    type: "counter/decrement",
    decrementBy: decrementBy,
  };
};

const reset = () => {
  return {
    type: "counter/reset",
  };
};

const set = ({ value } = {}) => {
  return {
    type: "counter/set",
    value,
  };
};

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increment());

// unsubscribe();
store.dispatch(increment());
store.dispatch(increment({ incrementBy: 5 }));
store.dispatch(decrement({ decrementBy: 10 }));
store.dispatch(set({ value: 47 }));
store.dispatch(reset());
