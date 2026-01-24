import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const menuItems = [
    {
        title:'MENU',
        items:[
            {
                icon:'/home.png',
                label:'Home',
                href:'/'
            },
            {
                icon:'/teacher.png',
                label:'Teachers',
                href:'/teachers'
            },
            {
                icon:'/student.png',
                label:'Students',
                href:'/students'
            },
            {
                icon:'/parent.png',
                label:'Parents',
                href:'/parents'
            },
            {
                icon:'/class.png',
                label:'Classes',
                href:'/classes'
            },
            {
                icon:'/lesson.png',
                label:'Lesson',
                href:'/lessons'
            },
            {
                icon:'/exam.png',
                label:'Exams',
                href:'/exams'
            },
            {
                icon:'/assignment.png',
                label:'Assignment',
                href:'/assignment'
            },
            {
                icon:'/attendance.png',
                label:'Attendance',
                href:'/attendance'
            },
            {
                icon:'/Calendar.png',
                label:'Events',
                href:'/events'
            },
            {
                icon:'/announcement.png',
                label:'Announcements',
                href:'/announcements'
            },
        ]
    },
    {
        title:'OTHER',
        items:[
            {
                icon:'/profile.png',
                label:'Profile',
                href:'/profile'
            },
            {
                icon:'/setting.png',
                label:'Settings',
                href:'/settings'
            },
            {
                icon:'/logout.png',
                label:'Logout',
                href:'/logout'
            },
        ]
    }
]

const Menu = () => {
  return (
    <div className='mt-4 text-sm'>
        {
            menuItems.map(item=>(
                <div className='flex flex-col gap-2' key={item.title}>
                    <span className='hidden lg:block text-gray-400 font-light my-4'>{item.title}</span>
                        {
                            item.items.map(nestedItem=>(
                                <Link className='flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2' key={nestedItem.label} href={nestedItem.href}>
                                    <Image src={nestedItem.icon} alt={nestedItem.icon} width={20} height={20}/>
                                    <span className='hidden md:block'>{nestedItem.label}</span>
                                </Link>
                            ))
                        }
                    
                </div>
            ))
        }
    </div>
  )
}

export default Menu