// App.jsx
import React, { useState, useEffect } from 'react';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    // Fetch data from the local server (JSON server)
    fetch('http://localhost:3000/transactions') // Updated URL to use JSON server at port 3000
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const addTransaction = (newTransaction) => {
    // Add the new transaction to the transactions list
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (id) => {
    // Delete the transaction from the server (JSON server)
    fetch(`http://localhost:3000/transactions/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Update the local state after successful deletion
        setTransactions(transactions.filter((transaction) => transaction.id !== id));
      })
      .catch((error) => console.error('Error deleting transaction:', error));
  };

  const sortTransactions = (field) => {
    if (field === sortField) {
      // If already sorted by this field, reverse the order
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
