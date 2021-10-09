import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import './Chart.css';

function Chart() {

  const data = [
    {
      name: 'Jan',
      ActiveUsers: 4000,
    },
    {
      name: 'Feb',
      ActiveUsers: 3000,
    },
    {
      name: 'Mar',
      ActiveUsers: 2000,

    },
    {
      name: 'Apr',
      ActiveUsers: 2780,

    },
    {
      name: 'May',
      ActiveUsers: 1890,

    },
    {
      name: 'Jun',
      ActiveUsers: 2390,

    },
    {
      name: 'Jul',
      ActiveUsers: 3490,
    },
  ];
  return (
    <div className="chart">
      <h3 className="chartTitle">Sales Data</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd"/>
          <Line type="monotone" dataKey="ActiveUsers" stroke="#5550bd" />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
