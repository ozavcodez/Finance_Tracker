"use client"
import React from 'react';
import { useStore } from '../../store/transactionStore';


const TransactionList: React.FC = () => {
  const transactions = useStore((state) => state.transactions);

  return (
    <div>
      <h2>Transaction List</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.date} - {transaction.category} - {transaction.type} - ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
