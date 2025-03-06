"use client"
import React, { useEffect, useState } from 'react'
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
  // {
  //   text:'Contact',
  //   section: 'Contact'
  // },
];


const Navbar = (): JSX.Element => {

  const [isOpened, setIsOpened] = useState(false)
  const [isNavbarSolid, setIsNavbarSolid] = useState(false)
  
  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY !== 0) {
        setIsNavbarSolid(true)
      } else {
        setIsNavbarSolid(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`w-screen fixed z-50 ${isNavbarSolid ? 'backdrop-blur' : ''} ${isOpened ? 'h-screen' : 'h-auto'}`}>
      <div className='relative flex flex-row px-10 pt-5 pb-2 justify-between items-center gap-[10px]'>
        <div className='flex flex-col font-marcellus text-center'>
          <a className='text-2xl'>Raynard</a>
          <a className='text-xl'>Tanadi</a>
        </div>
        <div className={`block md:hidden ${isOpened ? 'hidden' : 'block'}`}>
          <i className='fas fa-bars scale-150 cursor-pointer' onClick={() => setIsOpened(!isOpened)}></i>
        </div>
        <div className={`flex items-center bg-gray-400 bg-opacity-30 justify-center font-mulish overflow-hidden lg:hidden top-0 left-0 fixed w-full h-full z-[60] backdrop-blur ${isOpened ? 'translate-x-0' : '-translate-x-full '} `}>
        <i className='absolute top-0 right-0 fas fa-x scale-150 cursor-pointer p-5' onClick={() => setIsOpened(!isOpened)}></i>
          <div className='flex flex-col justify-center items-center'>
            {MENU_LIST.map((menu: Menu) => (
              <div
                key={menu.text}
                className='cursor-pointer hover:text-secondary mb-[20px]'
                onClick={()=> scrollToSection(menu.section)}
              >
                <div className='px-3 text-2xl font-bold' onClick={() => setIsOpened(!isOpened)}>{menu.text}</div>
              </div>
            ))}
            <ToggleMode/>
          </div>
        </div>
        <div className='relative md:flex flex-row hidden font-mulish items-center gap-[10px]'>
          {MENU_LIST.map((menu: Menu) => (
            <div 
              key={menu.text}
              className='cursor-pointer hover:text-secondary'
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