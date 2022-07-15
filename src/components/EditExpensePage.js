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
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm
          expense={props.expense}
          onSubmit={(expense) => {
            props.dispatch(startEditExpense(params.id, expense));
            console.log("editExpense dispatched");
            navigate("/dashboard");
          }}
        />
        <button
          className="button button--secondary"
          onClick={() => {
            props.dispatch(startRemoveExpenses({ id: props.expense.id }));
            navigate("/dashboard");
          }}
        >
          Remove Expense
        </button>
      </div>
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
