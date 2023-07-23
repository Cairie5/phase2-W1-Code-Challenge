// TransactionList.jsx
import React from 'react';
import TransactionTable from './TransactionTable';
import SearchBar from './SearchBar';

const TransactionList = ({ transactions, searchTerm, setSearchTerm, sortField, sortOrder, onSort, onDelete, onUndoDelete, deletedTransactions }) => {
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTransactions = filteredTransactions.sort((a, b) => {
    const aValue = sortField ? a[sortField] : null;
    const bValue = sortField ? b[sortField] : null;
    if (aValue === null || bValue === null) return 0;

    if (sortOrder === 'asc') {
      return aValue.toString().localeCompare(bValue.toString(), undefined, { numeric: true });
    } else {
      return bValue.toString().localeCompare(aValue.toString(), undefined, { numeric: true });
    }
  });

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TransactionTable
        transactions={sortedTransactions}
        onSort={onSort}
        onDelete={onDelete}
        onUndoDelete={onUndoDelete}
        deletedTransactions={deletedTransactions}
      />
    </div>
  );
};

export default TransactionList;
