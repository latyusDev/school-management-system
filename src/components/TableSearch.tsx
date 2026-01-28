import Image from 'next/image'
import React from 'react'

const TableSearch = () => {
  return (
         <div className='w-full md:w-auto md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
              <Image src='/search.png' alt='search' height={14} width={14}/>
              <input type='text' placeholder='Search...' className='w-50 p-2 bg-transparent outline-none' />
        
            </div>
  )
}

export default TableSearch