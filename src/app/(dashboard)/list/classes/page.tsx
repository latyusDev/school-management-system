import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import Image from 'next/image'
import type { Column } from '@/components/Table'
import Link from 'next/link'
import { role, classesData } from '@/lib/data'
import { FiDelete } from 'react-icons/fi'
import { BiEdit, BiFilter, BiSort } from 'react-icons/bi'
import FormModal from '@/components/FormModal'
import { IoCreate } from 'react-icons/io5'
import { Eye, Trash2 } from 'lucide-react'
import { PiPlusBold } from 'react-icons/pi'

interface Class{
    id: number;
    name: string;
    capacity: number;
    grade: number;
    supervisor:string
  }

const columns:Column[] = [
    {
        header:'Class Name',
        accessor:'name'
    },
    {
        header:'Capacity',
        accessor:'capacity',
        className:'hidden md:table-cell'

    },
    {
        header:'Grade',
        accessor:'grade',
        className:'hidden md:table-cell'

    },
    {
        header:'Supervisor',
        accessor:'supervisor',
        className:'hidden md:table-cell'
    },
    {
        header:'Actions',
        accessor:'actions',
    }
]


const ClassListPage = () => {
    const renderRow = (item:Class)=>{
               return  <tr key={item.id} className=' shadow-md  rounded-md '>
            <td className='flex items-center gap-4 p-4'>
             <div className='flex flex-col'>
                <h1 className='font-semibold'>{item.name}</h1>
             </div>
             </td>
             <td className='hidden md:table-cell'>{item.grade}</td>
             <td className='hidden md:table-cell'>{item.capacity}</td>
             <td className='hidden md:table-cell'>{item.supervisor}</td>
             <td>
                   <div className='flex items-center gap-2'>
                    {
                        role === 'admin'&&
                        <>
                            <Link href={`/list/classes/${item.id}`} className='text-blue-500'>
                                <Eye className='cursor-pointer size-7 md:size-8'/>
                            </Link>
                            <Link href={`/list/classes/${item.id}/edit`} className='text-green-500' >
                                <IoCreate className='cursor-pointer size-7 md:size-8'/>
                            </Link>
                            <button>
                                <Trash2 className='size-7 md:size-8 text-red-500' />
                            </button>

                            
                        </>
                    }
                </div>
             </td>
        </tr>
    }

  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
        {/* top */}
        <div className=" flex items-center justify-between">
            <h1 className='hidden md:block text-lg font-semibold'>All Classes</h1>
            <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
                <TableSearch/>
              <div className='flex items-center gap-4 self-end'>
                    <button className='flex size-8 items-center justify-center rounded-full'>
                        <BiFilter className='size-16'/>
                    </button>
                    <button className='flex size-8 items-center justify-center rounded-full text-blue-500'>
                        <BiSort className='size-16'/>
                    </button>
                    {
                        role === 'admin'&& 
                        <Link href={'/list/classes/create'} >
                            <PiPlusBold className='cursor-pointer text-green-500 size-10'/>
                        </Link>}
                </div>
            </div>
        </div>
        {/* list */}
        <div className="">
            <Table  columns={columns} row={renderRow} data={classesData} />
        </div>
        {/* pagination */}
        <div className="">
            <Pagination/>
        </div>
    </div>
  )
}

export default ClassListPage