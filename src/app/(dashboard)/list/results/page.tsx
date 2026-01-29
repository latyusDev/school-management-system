import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import Image from 'next/image'
import type { Column } from '@/components/Table'
import Link from 'next/link'
import {role,resultsData } from '@/lib/data'
import { FiDelete } from 'react-icons/fi'
import { BiEdit } from 'react-icons/bi'

interface Result{
    id: number;
    subject: string;
    class: string;
    teacher: string;
    student: string;
    type: 'exam'|'assignments';
    date:string;
    score:number;
  }

const columns:Column[] = [
    {
        header:'Subject Name',
        accessor:'name'
    },
    {
        header:'Class',
        accessor:'class',
        className:'hidden md:table-cell'
    },
    {
        header:'Teacher',
        accessor:'teacher',
        className:'hidden md:table-cell'

    },
    {
        header:'Student',
        accessor:'student',
        className:'hidden md:table-cell'
    },
    {
        header:'type',
        accessor:'type',
        className:'hidden md:table-cell'

    },
    {
        header:'Date',
        accessor:'date',
        className:'hidden md:table-cell'

    },
    {
        header:'Score',
        accessor:'score',
        className:'hidden md:table-cell'

    },
    {
        header:'Actions',
        accessor:'actions',
    }
]


const    ResultListPage = () => {
    const renderRow = (item:Result)=>{
       return  <tr key={item.id} className=' border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
            <td className='flex items-center gap-4 p-4'>
             <div className='flex flex-col'>
                <h1 className='font-semibold'>{item.subject}</h1>
             </div>
             </td>
             <td className='hidden md:table-cell'>{item.class}</td>
             <td className='hidden md:table-cell'>{item.teacher}</td>
             <td className='hidden md:table-cell'>{item.student}</td>
             <td className='hidden md:table-cell'>{item.type}</td>
             <td className='hidden md:table-cell'>{item.date}</td>
             <td className='hidden md:table-cell'>{item.score}</td>
             <td>
                 <div className='flex items-center gap-2'>
                    <Link href={`/list/teachers/${item.id}`}>
                    <button className='size-7 flex items-center justify-center rounded-full text-lamaSky'>
                        <BiEdit className='size-16'/>
                    </button>
                    </Link>
                    {
                        role === 'admin'&&<button className='size-7 flex items-center justify-center rounded-full text-lamaSky'>
                            <FiDelete className='size-16'/>
                    </button>
                    }
                    
                </div>
             </td>
        </tr>
    }

  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
        {/* top */}
        <div className=" flex items-center justify-between">
            <h1 className='hidden md:block text-lg font-semibold'>All Exams</h1>
            <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
                <TableSearch/>
                <div className='flex items-center gap-4 self-end'>
                    <button className='flex size-8 items-center justify-center rounded-full bg-lamaYellow'>
                        <Image src={'/filter.png'} alt='sort' width={14} height={14} />
                    </button>
                    <button className='flex size-8 items-center justify-center rounded-full bg-lamaYellow'>
                        <Image src={'/sort.png'} alt='plus' width={14} height={14} />
                    </button>
                    <button className='flex size-8 items-center justify-center rounded-full bg-lamaYellow'>
                        <Image src={'/plus.png'} alt='plus' width={14} height={14} />
                    </button>
                </div>
            </div>
        </div>
        {/* list */}
        <div className="">
            <Table  columns={columns} row={renderRow} data={resultsData} />
        </div>
        {/* pagination */}
        <div className="">
            <Pagination/>
        </div>
    </div>
  )
}

export default  ResultListPage