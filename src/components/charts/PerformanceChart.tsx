'use client'
import Image from 'next/image';
import { Pie, PieChart,ResponsiveContainer} from 'recharts';

// #region Sample data
const data = [
  { name: 'Group A', value: 92,  fill:'#C3EBFA' },
  { name: 'Group B', value: 8,   fill:'#FAE27C' }
  
];

// #endregion
const PerformanceChart = ({ isAnimationActive = true }: { isAnimationActive?: boolean })=>{
  return (
   <div className="bg-white p-4 rounded-md hd-80 relative">
    <div className=" flex items-center justify-between mt-4">
        <h1 className='font-semibold text-xl'>Performance</h1>
        <Image src={'/moreDark.png'} alt='dark' width={16} height={16} />
    </div>
    
            <ResponsiveContainer width="100%" height={300}>
        <PieChart>
            <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="70%"
            innerRadius="58%"
            outerRadius="90%"  
            fill="#8884d8"

            label
            isAnimationActive={isAnimationActive}
            />
        </PieChart>
        </ResponsiveContainer>

    <div className='absolute top-60 left-1/2 transform -translate-1/2 text-center'>
        <h1 className='text-3xl font-bold '>9.2</h1>
        <p className='text-xs text-gray-300'>of 10 max LTS</p>
    </div>
    <h2 className='font-semibold absolute bottom-8 left-0 right-0 m-auto text-center'>1st semester - 2nd semester</h2>
   </div>

  )
}

export default PerformanceChart 

