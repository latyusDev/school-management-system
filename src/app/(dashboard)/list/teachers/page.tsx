import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import Image from 'next/image'
import type { Column } from '@/components/Table'
import Link from 'next/link'
import { role, teacherData } from '@/lib/data'
import { FcViewDetails } from 'react-icons/fc'
import { FiDelete } from 'react-icons/fi'

interface Teacher{
    id: number;
    teacherId: string;
    name: string;
    email: string
    photo: string
    phone: string
    subjects: string[],
    classes: string[],
    address: string
  }

const columns:Column[] = [
    {
        header:'Info',
        accessor:'info'
    },
    {
        header:'Teacher ID',
        accessor:'teacherId',
        className:'hidden md:table-cell'
    },
    {
        header:'Subjects',
        accessor:'subjects',
        className:'hidden md:table-cell'
    },
    {
        header:'Classes',
        accessor:'classes',
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


const TeacherList = () => {
    console.log(teacherData)
    const renderRow = (item:Teacher)=>{
       return  <tr key={item.id} className=' border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
            <td className='flex items-center gap-4 p-4'>
                <Image src={item.photo} alt='photo' width={40} height={40}
             className='md:hidden xl:block size-10 rounded-full object-cover' />
             <div className='flex flex-col'>
                <h1 className='font-semibold'>{item.name}</h1>
                <p className='text-xs text-gray-500'>{item?.email}</p>
             </div>
             </td>
             <td className='hidden md:table-cell'>{item.teacherId}</td>
             <td className='hidden md:table-cell'>{item.subjects.join(',')}</td>
             <td className='hidden md:table-cell'>{item.classes.join(',')}</td>
             <td className='hidden md:table-cell'>{item.phone}</td>
             <td className='hidden md:table-cell'>{item.address}</td>
             <td>
                 <div className='flex items-center gap-2'>
                    <Link href={`/list/teachers/${item.id}`}>
                    <button className='size-7 flex items-center justify-center rounded-full text-lamaSky'>
                        <FcViewDetails className='size-16'/>
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
            <h1 className='hidden md:block text-lg font-semibold'>All Teachers</h1>
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
            <Table  columns={columns} row={renderRow} data={teacherData} />
        </div>
        {/* pagination */}
        <div className="">
            <Pagination/>
        </div>
    </div>
  )
}

export default TeacherList