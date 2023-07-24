// TransactionList.jsx
import React from 'react';
import TransactionTable from './TransactionTable';
import SearchBar from './SearchBar';

const TransactionList = ({ transactions, searchTerm, setSearchTerm, sortField, sortOrder, onSort, onDelete }) => {
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    const aValue = sortField === 'category' ? a.category : a.description;
    const bValue = sortField === 'category' ? b.category : b.description;
    return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
  });

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TransactionTable transactions={sortedTransactions} onSort={onSort} onDelete={onDelete} />
    </div>
  );
};

export default TransactionList;
