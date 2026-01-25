import Announcement from '@/components/Announcement'
import AttendanceChart from '@/components/charts/AttendanceChart'
import CountChart from '@/components/charts/CountChart'
import FinanceChart from '@/components/charts/FinanceChart'
import EventCalendar from '@/components/EventCalendar'
import UserCard from '@/components/UserCard'

const  AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row '>
      {/* left */}
      <div className="w-full flex-[0.67] flex flex-col gap-8">
           <div className='flex gap-4 justify-between flex-wrap'>
      {/* card */}
          <UserCard type='student'/>
          <UserCard type='teacher'/>
          <UserCard type='parent'/>
          <UserCard type='staff'/>
      </div>
      {/* middle chart */}
      <div className="flex gap-4 flex-col lg:flex-row">
        {/* count chart */}
        <div className=" flex-[0.35] ">
          <CountChart />
        </div>
        {/* attendance chart */}
        <div className=" flex-[0.65]  ">
          <AttendanceChart/>
        </div>
      </div>
      <div className="w-full h-125">
          <FinanceChart />
      </div>
      </div>
      {/* bottom chart */}
      {/* right */}
      <div className='w-full flex-[0.33]'>
        <EventCalendar />
        <Announcement />
      </div>
    </div>
  )
}

export default AdminPage