import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useStore } from '../store/transactionStore';

const Chart: React.FC = () => {
  const transactions = useStore((state) => state.transactions);
  const data = transactions.map((transaction) => ({
    date: transaction.date,
    amount: transaction.amount,
  }));

  return (
    <div className='-z-50'>
        <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="date" />
        <YAxis />
        {/* <Tooltip /> */}
        <Legend />
        <Line type="monotone" 
        dataKey="amount" 
        stroke="#8884d8" 
        />
      </LineChart>
    </ResponsiveContainer>
    </div>
    
  );
};

export default Chart;
