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
                href:'/',
                visible:['admin','teacher','student','parent'],
            },
            {
                icon:'/teacher.png',
                label:'Teachers',
                href:'/teacher',
                visible:['admin','teacher']
            },
            {
                icon:'/student.png',
                label:'Students',
                href:'/students',
                visible:['admin','teacher']
            },
            {
                icon:'/parent.png',
                label:'Parents',
                href:'/parents',
                visible:['admin','teacher']
            },
            {
                icon:'/subject.png',
                label:'Subjects',
                href:'/subjects',
                visible:['admin']
            },
            {
                icon:'/class.png',
                label:'Classes',
                href:'/classes',
                visible:['admin','teacher']
            },
            {
                icon:'/lesson.png',
                label:'Lesson',
                href:'/lessons',
                visible:['admin','teacher']
            },
            {
                icon:'/exam.png',
                label:'Exams',
                href:'/exams',
                visible:['admin','teacher','student','parent']
            },
            {
                icon:'/assignment.png',
                label:'Assignment',
                href:'/assignment',
                visible:['admin','teacher','student','parent']
            },
            {
                icon:'/attendance.png',
                label:'Attendance',
                href:'/attendance',
                visible:['admin','teacher','student','parent']
            },
            {
                icon:'/Calendar.png',
                label:'Events',
                href:'/events',
                visible:['admin','teacher','student','parent']
            },
            {
                icon:'/announcement.png',
                label:'Announcements',
                href:'/announcements',
                visible:['admin','teacher','student','parent']
            },
        ]
    },
    {
        title:'OTHER',
        items:[
            {
                icon:'/profile.png',
                label:'Profile',
                href:'/profile',
                visible:['admin','teacher','student','parent']
            },
            {
                icon:'/setting.png',
                label:'Settings',
                href:'/settings',
                visible:['admin','teacher','student','parent']
            },
            {
                icon:'/logout.png',
                label:'Logout',
                href:'/logout',
                visible:['admin','teacher','student','parent']
                
            },
        ]
    }
]
const role = 'admin'

const Menu = () => {
  return (
    <div className='mt-4 text-sm'>
        {
            menuItems.map(item=>(
                <div className='flex flex-col gap-2' key={item.title}>
                    <span className='hidden lg:block text-gray-400 font-light my-4'>{item.title}</span>
                        {
                            item.items.map(nestedItem=>(
                               nestedItem.visible.includes(role)&& <Link className='flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 w-full rounded-md md:px-2 hover:bg-lamaSkyLight' key={nestedItem.label} href={nestedItem.href}>
                                        <Image src={nestedItem.icon} alt={nestedItem.icon} width={20} height={20}
                                    />
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