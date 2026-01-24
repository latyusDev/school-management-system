import UserCard from '@/components/UserCard'
import React from 'react'

const  AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* left */}
      <div className='flex gap-4 justify-between flex-wrap'>
      {/* card */}
          <UserCard type='student'/>
          <UserCard type='teacher'/>
          <UserCard type='parent'/>
          <UserCard type='staff'/>
      </div>
      {/* right */}
      <div className='w-full lg:w-2/3'>e</div>
    </div>
  )
}

export default AdminPage