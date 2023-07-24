// TransactionList.jsx
import React from 'react';
import TransactionTable from './TransactionTable';
import SearchBar from './SearchBar';

// TransactionList component to display the list of transactions
const TransactionList = ({ transactions, searchTerm, setSearchTerm, sortField, sortOrder, onSort, onDelete }) => {
  // Filter transactions based on the searchTerm (case-insensitive search)
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort transactions based on the sortField and sortOrder
  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    const aValue = sortField === 'category' ? a.category : a.description;
    const bValue = sortField === 'category' ? b.category : b.description;
    return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
  });

  return (
    <div>
      {/* Render the SearchBar component to handle filtering transactions */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Render the TransactionTable component to display the sorted transactions */}
      <TransactionTable transactions={sortedTransactions} onSort={onSort} onDelete={onDelete} />
    </div>
  );
};

export default TransactionList;
