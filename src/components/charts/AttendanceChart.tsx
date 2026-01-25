'use client'

import Image from 'next/image';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// #region Sample data
const data = [
  {
    name: 'Mon',
    present: 60,
    absent: 40,
  },
  {
    name: 'Tue',
    present: 78,
    absent: 28,
  },
  {
    name: 'Wed',
    present: 60,
    absent: 90,
  },
  {
    name: 'Thu',
    present: 89,
    absent: 20,
  },
  {
    name: 'Fri',
    present: 45,
    absent: 37,
  }
];

// #endregion
const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
        <div className='flex justify-between items-center mb-7'>
            <h1 className='text-lg font-semibold'>Attendance</h1>
            <Image src={'/moreDark.png'} alt='dark' width={20} height={20} />

        </div>
            <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      barSize={20}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill:'#d1d5db'}} />
    <YAxis axisLine={false} tickLine={false} tick={{fill:'#d1d5db'}} />

        
      <Tooltip contentStyle={{borderRadius:'18px',borderColor:'lightgray'}} />
      <Legend align='left' wrapperStyle={{marginTop:'1.5rem'}} />
      <Bar dataKey="absent"  legendType='circle' fill="#FAE27C" radius={[10, 10, 0, 0]} />
      <Bar dataKey="present" legendType='circle'  fill="#C3CBFA" radius={[10, 10, 0, 0]} />
    </BarChart>
    </div>
  );
};

export default AttendanceChart;