'use client';
import Image from 'next/image';
import React, { useState } from 'react'
import { BiEdit, BiPlus, BiTrash } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { GrUpdate } from 'react-icons/gr';
import { IoCreate } from 'react-icons/io5';
import { PiPlusBold } from 'react-icons/pi';
import TeacherForm from './forms/TeacherForm';
import Link from 'next/link';

interface FormData{
    table:'teacher'|'student'|'parent'|'subject'|
          'class'|'lesson'|'exam'|'assignment'|'result'|
          'attendance'|'event'|'announcement';
    type:'create'|'update'|'delete';
    data?:any,
    id?:number
}

const FormModal = ({table,type,data,id}:FormData) => {
    const [isOpen,setIsOpen] = useState(false);


    const Form = ()=>{
        return type === 'delete'&&id?(
            <form className='p-4 flex flex-col gap-4'>
                <span className='text-center font-semibold text-black'>All data will be lost, are you sure you want to delete this {table} ?</span>
                <button className='bg-red-700 text-white py-2 px-4 cursor-pointer w-max self-center border-none rounded-md'>Delete</button>
            </form>
        ):<TeacherForm  type='create'/>
    }
    const size = type === 'create'?'size-8':'size-7';
    const bgColor = type === 'create'?'text-green-500': type === 'update'? 'text-green-500':'text-red-500'
  
    return (
        <div>
              <button 
                onClick={() => type !== 'create'&&setIsOpen(true)}
                className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
            >
                {type === 'delete' && <BiTrash className='cursor-pointer size-16'/>}
                {type === 'create' && <Link href={'/list/teachers/register'} >
                <PiPlusBold className='cursor-pointer size-16'/></Link>}
                {type === 'update' && <IoCreate className='cursor-pointer size-16'/>}
            </button>

            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center " 
                    onClick={() => setIsOpen(false)}
                >
                    <div 
                        className='bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%]  xl:w-[50%] 2xl:w-[40%] h-[500px] overflow-y-scroll'
                        onClick={(e) => e.stopPropagation()}
                    >
                         <div className=" w-max ml-auto ">
                          
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <CgClose className='cursor-pointer text-xl' />
                            </button>
                        </div>
                        <Form/>
                       
                        Hello
                    </div>
                </div>
            )}
        </div>
    )
}

export default FormModal