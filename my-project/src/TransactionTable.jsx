// TransactionTable.jsx
import React from 'react';

// TransactionTable component to display the table of transactions
const TransactionTable = ({ transactions, onSort, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          {/* Column headers with buttons to trigger sorting */}
          <th>
            <button onClick={() => onSort('date')}>Date</button>
          </th>
          <th>
            <button onClick={() => onSort('description')}>Description</button>
          </th>
          <th>
            <button onClick={() => onSort('category')}>Category</button>
          </th>
          <th>
            <button onClick={() => onSort('amount')}>Amount</button>
          </th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {/* Map through transactions to display each row */}
        {transactions.map((transaction) => (
          <tr key={transaction.id} className={transaction.isDeleted ? 'deleted' : ''}>
            {/* Display individual transaction data in each cell */}
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
            <td>
              {/* Button to trigger the onDelete function when clicked */}
              <button onClick={() => onDelete(transaction.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
