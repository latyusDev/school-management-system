import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import Image from 'next/image'
import type { Column } from '@/components/Table'
import Link from 'next/link'
import {role,assignmentsData } from '@/lib/data'
import { FiDelete } from 'react-icons/fi'
import { BiEdit } from 'react-icons/bi'

interface Assignment{
    id: number;
    subject: string;
    class: string;
    teacher: string;
    dueDate: string;
  }

const columns:Column[] = [
    {
        header:'Subject Name',
        accessor:'name'
    },
    {
        header:'Class',
        accessor:'class',

    },
    {
        header:'Teacher',
        accessor:'teacher',
        className:'hidden md:table-cell'

    },
    {
        header:'Due Date',
        accessor:'dueDate',
        className:'hidden md:table-cell'

    },
    {
        header:'Actions',
        accessor:'actions',
    }
]


const   AssignmentListPage = () => {
    const renderRow = (item:Assignment)=>{
       return  <tr key={item.id} className=' border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
            <td className='flex items-center gap-4 p-4'>
             <div className='flex flex-col'>
                <h1 className='font-semibold'>{item.subject}</h1>
             </div>
             </td>
             <td className='hidden md:table-cell'>{item.class}</td>
             <td className='hidden md:table-cell'>{item.teacher}</td>
             <td className='hidden md:table-cell'>{item.dueDate}</td>
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
            <Table  columns={columns} row={renderRow} data={assignmentsData} />
        </div>
        {/* pagination */}
        <div className="">
            <Pagination/>
        </div>
    </div>
  )
}

export default AssignmentListPage








