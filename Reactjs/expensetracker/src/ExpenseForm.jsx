import React, { useRef, useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  let [title, setTitle] = useState("");
  let [amount, setAmount] = useState("");

  let titleRef = useRef();

  let handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) {
      return alert("Please fill all the fields!");
    }

    let newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
    };
    onAddExpense(newExpense);

    setTitle("");
    setAmount("");
    titleRef.current.focus();

  };
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        placeholder="Expense Title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        ref={titleRef}
      />
      <input
        placeholder="Amount ₹"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
