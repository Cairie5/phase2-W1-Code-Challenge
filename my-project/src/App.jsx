// App.jsx
import React, { useState, useEffect } from 'react';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import './App.css';

const App = () => {
  // State variables to manage transactions, search term, sorting, and deleted transactions
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  // Fetch data from the local server (JSON server) on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Fetch data from the JSON server
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/transactions');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Add a new transaction to the transactions list
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  // Delete a transaction by ID
  const deleteTransaction = (id) => {
    // Delete the transaction from the JSON server
    fetch(`http://localhost:3000/transactions/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Update the local state after successful deletion
        setTransactions(transactions.filter((transaction) => transaction.id !== id));
      })
      .catch((error) => console.error('Error deleting transaction:', error));
  };

  // Sort transactions based on a field
  const sortTransactions = (field) => {
    if (field === sortField) {
      // If already sorted by this field, reverse the sort order
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Otherwise, sort in ascending order
      setSortField(field);
      setSortOrder('asc');
    }
  };

  return (
    <div>
      <h1>Bank Transactions</h1>
      <TransactionList
        transactions={transactions}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortField={sortField}
        sortOrder={sortOrder}
        onSort={sortTransactions}
        onDelete={deleteTransaction}
      />
      <TransactionForm addTransaction={addTransaction} />
    </div>
  );
};

export default App;
