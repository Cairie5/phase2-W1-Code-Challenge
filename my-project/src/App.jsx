// App.jsx
import React, { useState, useEffect } from 'react';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [deletedTransactions, setDeletedTransactions] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

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

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (id) => {
    const transactionToDelete = transactions.find((transaction) => transaction.id === id);
    if (transactionToDelete) {
      setDeletedTransactions([
        ...deletedTransactions,
        { transaction: transactionToDelete, originalIndex: transactions.indexOf(transactionToDelete) },
      ]);
      setTransactions(transactions.filter((transaction) => transaction.id !== id));
    }
  };

  const undoDelete = (id) => {
    const deletedTransaction = deletedTransactions.find((transaction) => transaction.transaction.id === id);
    if (deletedTransaction) {
      const { transaction, originalIndex } = deletedTransaction;
      if (!transactions.some((item) => item.id === id)) {
        const newTransactions = [...transactions];
        newTransactions.splice(originalIndex, 0, transaction);
        setTransactions(newTransactions);
      }
      setDeletedTransactions(deletedTransactions.filter((item) => item.transaction.id !== id));
    }
  };

  const sortTransactions = (field) => {
    if (field === sortField) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
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
        onUndoDelete={undoDelete}
        deletedTransactions={deletedTransactions}
      />
      <TransactionForm addTransaction={addTransaction} />
    </div>
  );
};

export default App;
