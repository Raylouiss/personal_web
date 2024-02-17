import React from 'react'
import { ToggleMode } from './toggleMode'

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
    text:'Contact',
    section: 'Contact'
  },
];


const Navbar = () => {
  return (
    <div className='w-screen h-auto sticky'>
      <div className='relative flex flex-row px-10 py-5 justify-between items-center gap-[10px]'>
        <div className='flex flex-col font-marcellus text-center'>
          <a className='text-xl'>Raynard</a>
          <a className='text-base'>Tanadi</a>
        </div>
        <div className='relative flex flex-row font-mulish items-center gap-[10px]'>
          {MENU_LIST.map((menu: Menu) => (
            <div 
              key={menu.text}
              className='cursor-pointer duration-300 hover:text-secondary'
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