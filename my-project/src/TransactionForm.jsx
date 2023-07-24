// TransactionForm.jsx
import React, { useState } from 'react';

// TransactionForm component for adding new transactions
const TransactionForm = ({ addTransaction }) => {
  // State variables to manage the form inputs
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const newTransaction = { date, description, category, amount: parseFloat(amount) };
    addTransaction(newTransaction); // Call the addTransaction function passed as a prop from the parent component
    // Clear the form inputs after adding the transaction
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for date */}
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

      {/* Input field for description */}
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />

      {/* Input field for category */}
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
      />

      {/* Input field for amount */}
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />

      {/* Submit button */}
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
