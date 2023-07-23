// TransactionTable.jsx
import React from 'react';

const TransactionTable = ({ transactions, onSort, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
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
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
            <td>
              <button onClick={() => onDelete(transaction.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
