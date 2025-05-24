import React from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  return (
    <form className="expense-form">
      <input type="text" placeholder="Description" />
      <input type="number" placeholder="Amount" />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
