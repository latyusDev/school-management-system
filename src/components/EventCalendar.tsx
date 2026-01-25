'use client'
import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Announcement from './Announcement';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type Event = {
    id:Number;
    title:String;
    time:String;
    description:String;
}

const events:Event[] = [
    {
        id:1,
        title:'Lorem ipsum dolor',
        time:'12:00 PM - 2:00 PM',
        description:`
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima itaque optio debitis quisquam, maiores consequatur!
        `
    },
    {
        id:2,
        title:'Lorem ipsum dolor',
        time:'12:00 PM - 2:00 PM',
        description:`
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima itaque optio debitis quisquam, maiores consequatur!
        `
    },
    {
        id:3,
        title:'Lorem ipsum dolor',
        time:'12:00 PM - 2:00 PM',
        description:`
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima itaque optio debitis quisquam, maiores consequatur!
        `
    },
]

const  EventCalendar = ()=> {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='bg-white p-4 rounded-md'>
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
            <h1 className='text-xl font-semibold  my-4'>Events</h1>
            <Image src={'/moreDark.png'} alt='event' width={20} height={20}/>
      </div>

      <div className='flex flex-col gap-4'>
        {
            events.map(event=>(
                <div className='border-2 p-5 rounded-md border-gray-100  border-t-4
                 odd:border-t-lamaSky even:border-t-lamaPurple' key={event.id as number} >
                        <div className='flex items-center justify-between'>
                            <h1 className='font-semibold text-md text-gray-600'>{event.title}</h1>
                            <span className='text-sm'>{event.time}</span>
                        </div>
                            <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
                </div>
            ))
        }

      </div>

      <Announcement />
    </div>
  );
}

export default EventCalendar