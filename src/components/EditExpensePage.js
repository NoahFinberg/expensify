import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpenses } from "../actions/expenses";
import { useNavigate } from "react-router-dom";

const EditExpensePage = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  console.log(props);
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(startEditExpense(params.id, expense));
          console.log("editExpense dispatched");
          navigate("/");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(startRemoveExpenses({ id: props.expense.id }));
          navigate("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  const params = { id: window.location.pathname.split("/")[2] };
  return {
    expense: state.expenses.find((expense) => expense.id === params.id),
  };
};

export default connect(mapStateToProps)(EditExpensePage);
