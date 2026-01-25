
'use client'
import Image from 'next/image'
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'Jan',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'feb',
    income: 3000,
    expense: 1398,
  },
  {
    name: 'Mar',
    income: 2000,
    expense: 9800,
  },
  {
    name: 'Apri',
    income: 2780,
    expense: 3908,
  },
  {
    name: 'May',
    income: 1890,
    expense: 4800,
  },
  {
    name: 'Jun',
    income: 2390,
    expense: 3800,
  },
  {
    name: 'Jul',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Aug',
    income: 3490,
    expense: 4300,
  },
   {
    name: 'Sep',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Oct',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Nov',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Dec',
    income: 3490,
    expense: 4300,
  },
]

const FinanceChart = () => {
  return (
    <div className='bg-white p-4'>
        <div className='flex justify-between items-center mb-7'>
            <h1 className='text-lg font-semibold'>Finance</h1>
            <Image src={'/moreDark.png'} alt='dark' width={20} height={20} />

        </div>
          <LineChart
      style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke='#ddd' />
      <XAxis tickMargin={10} dataKey="name" tickLine={false} tick={{fill:'#d1d5db'}}  />
      <YAxis tickMargin={10} width="auto" tickLine={false} tick={{fill:'#d1d5db'}}  />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="expense"  strokeWidth={3}  stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="income"   strokeWidth={3} stroke="#82ca9d" />
    </LineChart>
    </div>
  )
}

export default FinanceChart