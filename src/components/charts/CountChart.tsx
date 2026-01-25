'use client'
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';


// #region Sample data
const data = [
  {
    name: 'Total',
    count: 106,
    fill: 'white',
  },
  {
    name: 'Girls',
    count: 53,
    fill: '#FAE27C',
  },
  {
    name: 'Boys',
    count: 53,
    fill: '#C3CBFA',
  }
 
 
];

// #endregion
const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

const CountChart = () => {
  return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            {/* title */}
            <div className='flex justify-between items-center flex-wrap'>
                <h1 className='text-lg font-semibold '>Students</h1>
                <Image src={'/moreDark.png'} alt='more' width={20} height={20} />
            </div>
            {/* chart */}
            <div className='w-full relative'>
                <RadialBarChart
                innerRadius='40%'
                outerRadius='100%'
                        style={{ width: '150%', maxWidth: '800px', maxHeight: '80vh', aspectRatio: 1.618 }}
                        responsive
                        cx="33%"
                        cy="50%"
                        barSize={32}
                        data={data}
                        >
                <RadialBar label={{ position: 'insideStart', fill: '#fff' }} background dataKey="count"  />
                {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle"/> */}
                <Tooltip />
                </RadialBarChart>
                <Image src={'/maleFemale.png'} alt='male' width={50} height={50} className='absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2'/>

            </div>
            {/* bottom */}
            <div className="flex justify-center gap-6 mt-3 text-center">
                <div className=" flex flex-col gap-1">
                    <div className="w-5 h-5 mx-auto bg-lamaSky rounded-full"/>
                    <h1 className='font-bold '>1,234</h1>
                    <h2 className='text-sm text-gray-400 '>Boys (55%)</h2>
                </div>
                <div className=" flex flex-col gap-1">
                    <div className="w-5 h-5 mx-auto bg-lamaYellow rounded-full"/>
                    <h1 className='font-bold '>1,234</h1>
                    <h2 className='text-sm text-gray-400 '>Girls (55%)</h2>
                </div>
            </div>


        
    </div>
  );
};

export default CountChart