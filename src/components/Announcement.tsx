import React from 'react'

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


const Announcement = () => {
  return (
        <div className='bg-white p-4 rounded-md'>
            <div className='flex items-center justify-between'>
                <h1 className='font-semibold mb-5'>Announcements</h1>
                <span className='text-xs text-gray-400'>View All</span>
            </div>
            <div className='bg-lamaSkyLight rounded-md p-4'></div>
           <div className='flex flex-col gap-4 mt-4'>
        {
            events.map(event=>(
                <div className=' p-5 rounded-md 
                 odd:bg-lamaPurpleLight even:bg-lamaYellowLight' key={event.id as number} >
                        <div className='flex items-center justify-between'>
                            <h1 className='font-semibold text-md text-gray-600'>{event.title}</h1>
                            <span className='text-sm'>{event.time}</span>
                        </div>
                            <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
                </div>
            ))
        }

      </div>
        </div>
  )
}

export default Announcement