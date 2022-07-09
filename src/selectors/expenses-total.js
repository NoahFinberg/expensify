export default (expenses) => {
  const total = expenses
    .map((expense) => expense.amount)
    .reduce((sum, value) => {
      return sum + value;
    }, 0);
  return total;
};
