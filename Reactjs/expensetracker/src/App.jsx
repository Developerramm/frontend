import React, { useEffect, useState } from "react";
import "./App.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  let addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  let deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((item) => item.id !== id));
  };

  let totalExpenses = expenses.reduce((sum,item)=> sum + item.amount,0);

  return (
    <div className="app-container">
      <h1>💰 Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <h3 className="total">Total Expense: ₹{totalExpenses.toFixed(2)} </h3>
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
};

export default App;
