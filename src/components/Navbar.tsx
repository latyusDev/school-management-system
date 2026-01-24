import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 items-center '>
    {/* SEARCH BAR */}
    <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
      <Image src='/search.png' alt='search' height={14} width={14}/>
      <input type='text' placeholder='Search...' className='w-50 p-2 bg-transparent outline-none' />

    </div>
    {/* icons and user */}
    <div className='flex items-center justify-end w-full gap-6 '>
        <div className='bg-white rounded-full size-7'>
            <Image src='/message.png' alt='message' width={20} height={20}/>
        </div>
        <div className='bg-white rounded-full size-7 relative'>
            <Image src='/announcement.png' alt='message' width={20} height={20}/>
            <div className='absolute -top-3 -right-3 size-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs'>1</div>
        </div>
        <div className='flex flex-col'>
          <span className='text-xs leading-3 font-medium'>Yunus Abdullateef</span>
          <span className='text-[10px] text-gray-500'>Admin</span>
        </div>
        <Image src='/avatar.png' alt='avatar' width={36} height={36} className='rounded-full'/>
    </div>
    </div>
  )
}

export default Navbar