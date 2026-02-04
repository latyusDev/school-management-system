import Announcement from '@/components/Announcement'
import BigCalendar from '@/components/BigCalendar'
import PerformanceChart from '@/components/charts/PerformanceChart'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { CgMoveUp } from 'react-icons/cg'
import { GoMail } from 'react-icons/go'
import { IoGitBranchSharp } from 'react-icons/io5'
import { MdBloodtype, MdDateRange, MdPlayLesson, MdRoomPreferences } from 'react-icons/md'
import { TbRectangularPrism } from 'react-icons/tb'
import { VscSymbolClass } from 'react-icons/vsc'

const SingleTeacherPage = () => {
  return (
    <div>
      <div className='flex  flex-col gap-4 xl:flex-row'>
          {/* left */}
          <div className='xl:flex-[0.70]'>
          <div className="flex gap-2 flex-col md:flex-row   ">
          {/* top */}
          <div className="bg-lamaSky px-4 py-6 basis-[70%] flex items-center justify-around flex-col lg:flex-row gap-4 ">
              {/* user info card */}
                <div className="md:basis-[35%] size-40  md:size-auto">
                  <Image src={'https://randomuser.me/api/portraits/men/1.jpg'} alt='teacher image' width={144} height={144} className='size-full rounded-full object-cover'/>
                </div>
                <div className="md:basis-[65%] flex flex-col jusstify-between gap-4  text-center md:text-left ">
                  <h1 className='text-xl font-semibold mt-2 md:mt-0'>Yunus Sulaiman</h1>
                  <p className='text-sm text-gray-500'>Lorem ipsum dolor sit, amet conse ctetur adipisicing elit. Suscipit, facilis repellat</p>
                <div className='grid grid-cols-2 gap-2 text-xs font-medium'>
                  <div className="flex items-center gap-1">
                    <MdBloodtype className='size-7' />
                    <span>A</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MdDateRange className='size-7' />
                    <span>January 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GoMail className='size-7' />
                    <span>user@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BiPhoneCall className='size-7' />
                    <span>123 45 678</span>
                  </div>
                  
                </div>
                </div>
              {/* small cards */}
              <div className='flex-1 '></div>

          </div>
          <div className='basis-[30%]  grid md:grid-cols-[150px_150px] gap-2'>
            <div className='bg-white flex  gap-3 py-5 md:pt-7 '>
              <TbRectangularPrism className='size-8 ml-4'/>
              <div>
                  <h2>90%</h2>
                  <span>Attendance</span>
              </div>
            </div>
            <div className='bg-white flex  gap-3 py-5 md:pt-7 '>
              <MdRoomPreferences className='size-8 ml-4'/>
              <div>
                  <h2>90%</h2>
                  <span>Classes</span>
              </div>
            </div>
            <div className='bg-white flex  gap-3 py-5 md:pt-7 '>
              <MdPlayLesson className='size-8 ml-4'/>
              <div>
                  <h2>80%</h2>
                  <span>Lesson</span>
              </div>
            </div>
            <div className='bg-white flex  gap-3 py-5 md:pt-7 '>
              <IoGitBranchSharp className='size-8 ml-4'/>
              <div>
                  <h2>90%</h2>
                  <span>Branches</span>
              </div>
            </div>
          </div>
          </div>
              {/* bottom */}
              <div className="bg-white rounded-md p-4 mt-4">
                  <h1>Teacher's schedule</h1>
                  <BigCalendar/>
              </div>

          </div>
          {/* right */}
          <div className="w-full xl:flex-[0.30] ">

            <div className='bg-white p-4 rounded-md'>
              <h1 className='text-xl font-semibold'>Shortcuts</h1>
              <div className='mt-4 grid grid-cols-2 gap-4  text-xs text-gray-500'>
                  <Link className='p-3 bg-lamaSkyLight ' href={`/list/classes?supervisorId=${12}`}>Teacher's Classes</Link>
                  <Link className='p-3 bg-lamaPurpleLight ' href={`/list/students?teacherId=${15}`}>Teacher's Students</Link>
                  <Link className='p-3 bg-lamaYellowLight ' href={`/list/lessons?teacherId=${12}`}>Teacher's Lessons</Link>
                  <Link className='p-3 bg-pink-50 ' href={`/list/exams?teacherId=${12}`}>Teacher's Exams</Link>
                  <Link className='p-3 bg-lamaSkyLight ' href={`/list/assignments?teacherId=${12}`}>Teacher's Assignment</Link>
                  
              </div>
            </div>
            <PerformanceChart/>
            <Announcement/>
          </div>
        
    </div>
    </div>
  )
}

export default SingleTeacherPage