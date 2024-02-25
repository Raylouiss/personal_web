"use client"
import React from 'react'
import { ToggleMode } from './toggleMode'
import { scrollToSection } from '@/lib/scroll';

interface Menu {
  text: string;
  section: string
}

const MENU_LIST : Menu[] = [
  {
    text:'Home',
    section: 'Home'
  },
  {
    text:'About',
    section: 'About'
  },
  {
    text:'Skills',
    section: 'Skills'
  },
  {
    text:'Projects',
    section: 'Projects'
  },
  {
    text:'Experiences',
    section: 'Experiences'
  },
  {
    text:'Contact',
    section: 'Contact'
  },
];


const Navbar = () => {
  return (
    <div className='w-screen h-auto fixed z-50'>
      <div className='relative flex flex-row px-10 py-5 justify-between items-center gap-[10px]'>
        <div className='flex flex-col font-marcellus text-center'>
          <a className='text-2xl'>Raynard</a>
          <a className='text-xl'>Tanadi</a>
        </div>
        <div className='block md:hidden'>
          <i className='fas fa-bars scale-150 mr-[20px]'></i>
        </div>
        <div className='relative md:flex flex-row hidden font-mulish items-center gap-[10px]'>
          {MENU_LIST.map((menu: Menu) => (
            <div 
              key={menu.text}
              className='cursor-pointer duration-300 hover:text-secondary'
              onClick={()=> scrollToSection(menu.section)}
            >
              <div className='px-3 text-base'>{menu.text}</div>
            </div>
          ))}
          <ToggleMode/>
        </div>
      </div>
    </div>
  )
}

export default Navbar