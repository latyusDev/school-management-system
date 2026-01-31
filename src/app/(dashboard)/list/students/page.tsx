import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import Image from 'next/image'
import type { Column } from '@/components/Table'
import Link from 'next/link'
import { role, studentsData, teacherData } from '@/lib/data'
import { FcViewDetails } from 'react-icons/fc'
import { FiDelete } from 'react-icons/fi'
import FormModal from '@/components/FormModal'
import { IoCreate } from 'react-icons/io5'
import { BiFilter, BiSort } from 'react-icons/bi'
import { Eye, Trash2 } from 'lucide-react'
import { PiPlusBold } from 'react-icons/pi'

interface Student{
    id: number;
    studentId: string;
    name: string;
    email?: string
    photo: string
    phone?: string
    grade: number,
    class: string,
    address: string
  }

const columns:Column[] = [
    {
        header:'Info',
        accessor:'info'
    },
    {
        header:'Student ID',
        accessor:'studentId',
        className:'hidden md:table-cell'
    },
    {
        header:'Grade',
        accessor:'grades',
        className:'hidden md:table-cell'
    },
    {
        header:'Class',
        accessor:'class',
        className:'hidden md:table-cell'
    },
    {
        header:'Phone',
        accessor:'phone',
        className:'hidden md:table-cell'
    },
    {
        header:'Address',
        accessor:'address',
        className:'hidden md:table-cell'
    },
    {
        header:'Actions',
        accessor:'action'
    },
    
]


const StudentListPage = () => {
    const renderRow = (item:Student)=>{
       return  <tr key={item.id} className=' shadow-md  rounded-md '>
            <td className='flex items-center gap-4 p-4'>
                <Image src={item.photo} alt='photo' width={40} height={40}
             className='md:hidden xl:block size-10 rounded-full object-cover' />
             <div className='flex flex-col'>
                <h1 className='font-semibold'>{item.name}</h1>
                <p className='text-xs text-gray-500'>{item?.email}</p>
             </div>
             </td>
             <td className='hidden md:table-cell'>{item.studentId}</td>
             <td className='hidden md:table-cell'>{item.grade}</td>
             <td className='hidden md:table-cell'>{item.class}</td>
             <td className='hidden md:table-cell'>{item.phone}</td>
             <td className='hidden md:table-cell'>{item.address}</td>
             <td>
                  <div className='flex items-center gap-2'>
                    {
                        role === 'admin'&&
                        <>
                            <Link href={`/list/students/${item.id}`} className='text-blue-500'>
                                <Eye className='cursor-pointer size-7 md:size-8'/>
                            </Link>
                            <Link href={`/list/students/${item.id}/edit`} className='text-green-500' >
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
            <h1 className='hidden md:block text-lg font-semibold'>All Students</h1>
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
                        <Link href={'/list/students/register'} >
                            <PiPlusBold className='cursor-pointer text-green-500 size-10'/>
                        </Link>}
                </div>
            </div>
        </div>
        {/* list */}
        <div className="">
            <Table  columns={columns} row={renderRow} data={studentsData} />
        </div>
        {/* pagination */}
        <div className="">
            <Pagination/>
        </div>
    </div>
  )
}

export default StudentListPage