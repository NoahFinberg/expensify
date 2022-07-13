import { v1 as uuid } from "uuid";
import { firebase } from "../firebase/firebase";
import database from "../firebase/firebase";
// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

// START_REMOVE_EXPENSES
export const startRemoveExpenses = ({ id }) => {
  const dbRef = firebase.ref(firebase.getDatabase());
  return (dispatch) => {
    return firebase
      .remove(firebase.child(dbRef, `expenses/${id}`))
      .then(() => {
        dispatch(removeExpense({ id }));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

// START EDIT EXPENSE
export const startEditExpense = (id, updates) => {
  const dbRef = firebase.ref(firebase.getDatabase());
  return (dispatch) => {
    const firebaseUpdates = {};
    firebaseUpdates[`/expenses/${id}`] = updates;
    return firebase
      .update(dbRef, firebaseUpdates)
      .then(() => {
        dispatch(editExpense(id, updates));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    const expenseListRef = firebase.ref(database, "expenses");
    const newExpenseRef = firebase.push(expenseListRef);
    return firebase
      .set(newExpenseRef, {
        ...expense,
      })
      .then(() => {
        dispatch(
          addExpense({
            id: newExpenseRef.key,
            ...expense,
          })
        );
      });
  };
};

// SET EXPENSES
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

// START SET EXPENSES
export const startSetExpenses = () => {
  const dbRef = firebase.ref(firebase.getDatabase());
  return (dispatch) => {
    const expenses = [];
    return firebase
      .get(firebase.child(dbRef, "expenses"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
            console.log("snapshot", childSnapshot);
            expenses.push({
              id: childSnapshot.key,
              ...childSnapshot.val(),
            });
            console.log(expenses);
            dispatch(setExpenses(expenses));
          });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
