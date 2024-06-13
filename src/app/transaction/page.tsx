"use client"
import React, { useState, FormEvent } from 'react';
import { useStore } from '../../store/transactionStore';
import { Transaction } from '@/types';

const InputForm: React.FC = () => {
  const addTransaction = useStore((state) => state.addTransaction);
  const [type, setType] = useState<'income' | 'expense'>('income');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newTransaction: Transaction = {
      id: new Date().toISOString(),
      type,
      category,
      amount,
      date,
    };
    addTransaction(newTransaction);
    setCategory('');
    setAmount(0);
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Type:
          <select value={type} onChange={(e) => setType(e.target.value as 'income' | 'expense')}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} required />
        </label>
      </div>
      <div>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default InputForm;
