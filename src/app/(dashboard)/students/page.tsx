import Announcement from '@/components/Announcement'
import BigCalendar from '@/components/BigCalendar'
import EventCalendar from '@/components/EventCalendar'
import React from 'react'

const StudentPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col xl:flex-row'>
        {/* left */}

        <div className='flex-[0.67]'>
            <div className='h-full p-4 bg-white rounded-md'>
                <h1 className='text-xl font-bold'>Schedule (4A)</h1>
                <BigCalendar />
            </div>
        </div>
        {/* right */}

          <div className='w-full flex-[0.33]'>
            <EventCalendar />
            <Announcement/>
        </div>

    </div>
  )
}

export default StudentPage