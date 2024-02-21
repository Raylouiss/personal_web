"use client"

import React, { useEffect, useState } from 'react'
import TiltComponent from '@/components/ui/tilt'
import { useTheme } from 'next-themes'
import Button from '@/components/Hero/Button'

interface ButtonProps {
  text: string
  icon_name: string
  height: string
  width: string
}

const About = (): JSX.Element => {

  const {setTheme, resolvedTheme } = useTheme();
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState(resolvedTheme);

  useEffect(() => {
    setMode(resolvedTheme);
    setLoading(false);
  }, [resolvedTheme]);

  const button: ButtonProps = {
    text: "Download CV",
    icon_name: "fa-download",
    height: "h-[45px]",
    width: "w-[200px]"
  }
  
  return (
    <div className='w-screen h-auto flex lg:flex-row flex-col justify-center items-center font-marcellus overflow-hidden px-[150px] py-10 gap-[150px] mt-[120px]' id='About' >
      <TiltComponent />
      <div className='flex flex-col justify-center items-center  lg:items-start lg:justify-start lg:text-start text-center gap-5'>
        <h1 className='font-bold text-[50px]'>
          I&apos;m Raynard Tanadi.
        </h1>
        <div className='text-xl mb-[20px]'>
          <h2>
            Currently in my 6th semester and interested in computer-related things such as software engineering, data, and AI.
          </h2>
          <br/>
          <h2>
            I consistently seek opportunities to develop my soft and hard skills through internships, competitions, volunteering, and projects.
          </h2>
        </div>
        <Button {...button}/>
      </div>
    </div>
  )
}

export default About