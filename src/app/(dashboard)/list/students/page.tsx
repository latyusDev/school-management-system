import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import Image from 'next/image'
import Link from 'next/link'
import { role } from '@/lib/data'
import { IoCreate } from 'react-icons/io5'
import { BiFilter, BiSort } from 'react-icons/bi'
import { Eye, Trash2 } from 'lucide-react'
import { PiPlusBold } from 'react-icons/pi'
import { ITEM_PER_PAGE } from '@/lib/settings'
import prisma from '@/lib/db'
import { Class, Prisma,Student } from '@/generated/prisma/client'

type StudentList = Student & {class:Class} ;
const columns = [
    {
        header:'Info',
        accessor:'info'
    },
    {
        header:'Username ',
        accessor:'username',
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
    // {
    //     header:'Address',
    //     accessor:'address',
    //     className:'hidden md:table-cell'
    // },
    {
        header:'Actions',
        accessor:'action'
    },
    
]


const renderRow = (item:StudentList)=>{
    console.log(item)
   return  <tr key={item.id} className=' shadow-md  rounded-md '>
        <td className='flex items-center gap-4 p-4'>
            <Image src={item.img||'/avatar.png'} alt='photo' width={40} height={40}
         className='md:hidden xl:block size-10 rounded-full object-cover' />
         <div className='flex flex-col'>
            <h1 className='font-semibold'>{item.firstName} {item.lastName}</h1>
            <p className='text-xs text-gray-500'>{item?.class.name}</p>
         </div>
         </td>
         <td className='hidden md:table-cell'>{item.username}</td>
         <td className='hidden md:table-cell'>{item.class.name[0]}</td>
         <td className='hidden md:table-cell'>{item.phone}</td>
         {/* <td className='hidden md:table-cell'>{item.address}</td> */}
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
const StudentListPage =async({searchParams}:{searchParams:Promise<{page?:string,classId?:string}|undefined>}) => {
    // Await the searchParams Promise
    const resolvedParams = await searchParams;
    const {page, ...queryParams} = resolvedParams || {};


    const p = page ? (Number(page)) : 1 
    console.log(queryParams)
    console.log(Object.entries(queryParams),'ent')
    // url params conditions
    let query:Prisma.StudentWhereInput = {}

    if(queryParams){
        for(const [key,values] of Object.entries(queryParams)){
              if(values !== undefined){
                  switch(key){
                    case 'classId':
                       query.class = {
                        lessons:{
                        some:{
                            teacherId:values
                        }
                    }}
                    break;
                    case 'search': 
                       query.firstName = {contains:values,mode:'insensitive'} 
                    break;
                }
              }
        }
    }

    const [data,count] = await prisma.$transaction([
         prisma.student.findMany({
        where:query,
        include:{
            class:true
        },
        take: ITEM_PER_PAGE,
        skip: ITEM_PER_PAGE * (p- 1)
    }),
     prisma.student.count({where:query})
])

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
            <Table  columns={columns} row={renderRow} data={data} />
        </div>
        {/* pagination */}
        <div className="">
            <Pagination page={p} count={count}/>
        </div>
    </div>
  )
}

export default StudentListPage