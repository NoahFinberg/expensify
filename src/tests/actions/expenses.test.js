import configureMockStore from "redux-mock-store";
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import thunk from "redux-thunk";
jest.setTimeout(10000);
const createMockStore = configureMockStore([thunk]);

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("123abc", { note: "New note" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: { note: "New note" },
  });
});

test("should setup add expense action object with provided values", () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2],
  });
});

// test("should add expense to database and store", (done) => {
//   const store = createMockStore({});
//   const expenseData = {
//     description: "Mouse",
//     amount: 3000,
//     note: "This one is better",
//     createdAt: 1000,
//   };

//   const addedExpense = startAddExpense(expenseData);
//   console.log(addedExpense);
//   store.dispatch(addedExpense).then(() => {
//     expect(1).toBe(2);
//     done();
//   });
// });

// test("should add expense with defaults to database store", () => {});

// test("should setup add expense action object with default values", () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: "ADD_EXPENSE",
//     expense: {
//       description: "",
//       note: "",
//       amount: 0,
//       createdAt: 0,
//       id: expect.any(String),
//     },
//   });
// });
