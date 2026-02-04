import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import Link from 'next/link'
import {role, lessonsData } from '@/lib/data'
import { BiFilter, BiSort } from 'react-icons/bi'
import { IoCreate } from 'react-icons/io5'
import { Eye, Trash2 } from 'lucide-react'
import { PiPlusBold } from 'react-icons/pi'
import { ITEM_PER_PAGE } from '@/lib/settings'
import prisma from '@/lib/db'
import { Class, Lesson, Prisma, Subject, Teacher } from '@/generated/prisma/client'


type LessonList = Lesson&{subject:Subject}&{class:Class}&{teacher:Teacher}

const columns = [
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
        header:'Actions',
        accessor:'actions',
    }
]
const renderRow = (item:LessonList)=>{
   return  <tr key={item.id} className=' shadow-md  rounded-md '>
        <td className='flex items-center gap-4 p-4'>
         <div className='flex flex-col'>
            <h1 className='font-semibold'>{item.subject.name}</h1>
         </div>
         </td>
         <td className='hidden md:table-cell'>{item.class.name}</td>
         <td className='hidden md:table-cell'>{item.teacher.firstName+' '+item.teacher.lastName}</td>
         <td>
              <div className='flex items-center gap-2'>
                {
                    role === 'admin'&&
                    <>
                        <Link href={`/list/lessons/${item.id}`} className='text-blue-500'>
                            <Eye className='cursor-pointer size-7 md:size-8'/>
                        </Link>
                        <Link href={`/list/lessons/${item.id}/edit`} className='text-green-500' >
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


const  LessonListPage = async({searchParams}:{searchParams:Promise<{page?:string,classId?:string}|undefined>}) => {
    // Await the searchParams Promise
    const resolvedParams = await searchParams;
    const {page, ...queryParams} = resolvedParams || {};


    const p = page ? (Number(page)) : 1 
    // url params conditions
    let query:Prisma.LessonWhereInput = {}
    if(queryParams){
        for(const [key,values] of Object.entries(queryParams)){
              if(values !== undefined){
                  switch(key){
                    case 'teacherId':
                       query.teacherId = values
                    break;
                    case 'classId':
                       query.classId = Number(values)
                    break;
                    case 'search': 
                       query.OR = [
                        {
                            subject:{
                            name:{contains:values,mode:'insensitive'} 
                        }},
                       { 
                        teacher:{
                            firstName:{contains:values,mode:'insensitive'} ,
                        }},
                    ]
                    break;
                }
              }
        }
    }

    const [data,count] = await prisma.$transaction([
         prisma.lesson.findMany({
        where:query,
        include:{
            teacher:{
                select:{firstName:true,lastName:true}
            },
            class:{
                select:{name:true}
            },
            subject:{
                select:{
                    name:true
                }
            },
        },
        take: ITEM_PER_PAGE,
        skip: ITEM_PER_PAGE * (p- 1)
    }),
     prisma.lesson.count({where:query})
])


  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
        {/* top */}
        <div className=" flex items-center justify-between">
            <h1 className='hidden md:block text-lg font-semibold'>All Lessons</h1>
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
                        <Link href={'/list/lessons/create'} >
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

export default  LessonListPage