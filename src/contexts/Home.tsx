"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import Button from '@/components/Hero/Button'
import Email from '@/components/Hero/Email'
import Github from '@/components/Hero/Github'
import Linkedin from '@/components/Hero/Linkedin'
import Whatsapp from '@/components/Hero/Whatsapp'
import HeroImage from '@/assets/images/hero.svg'
import ParticlesComponent from '@/components/ui/particle'
import { useTheme } from 'next-themes'
import { scrollToSection } from '@/lib/scroll';

interface ButtonProps {
  text: string
  icon_name: string
  height: string
  width: string
}

const Home = () => {

  const {setTheme, resolvedTheme } = useTheme();
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState(resolvedTheme);

  useEffect(() => {
    setMode(resolvedTheme);
    setLoading(false);
  }, [resolvedTheme]);

  const button: ButtonProps = {
    text: "About Me",
    icon_name: "fa-arrow-circle-down",
    height: "h-[45px]",
    width: "w-[130px]"
  }

  const socialMedia = [
    {
      href: "https://www.linkedin.com/in/raynard-tanadi-49851b1b5/",
      icon: <Linkedin width={40} height={40}/>
    },
    {
      href: "https://github.com/Raylouiss",
      icon: <Github width={40} height={40} />
    },
    {
      href: "mailto:sebastianraynard@gmail.com",
      icon: <Email width={40} height={40}/>
    },
    {
      href: "https://wa.me/6281906100919",
      icon: <Whatsapp width={40} height={40}/>
    },
  ]

  return (
    <div className='w-screen h-auto flex flex-col lg:flex-row font-marcellus justify-center items-center px-20 overflow-hidden lg:pr-[50px] xl:pr-[100px] lg:pl-[100px] xl:pl-[150px] mt-[150px] lg:mt-[100px]' id='Home'>
      <ParticlesComponent/>
      <div className='flex flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-start'>
        <h1 className='text-2xl font-bold'>
          Hi, I&apos;m Raynard
        </h1>
        <h1 className='text-[50px] font-extrabold'>
          An Informatics Engineering Student
        </h1>
        <h1 className='text-lg mb-[20px] '>
          at Bandung Institute of Technology, Indonesia
        </h1>
        <div onClick={() => scrollToSection('About')}>
          <Button {...button}/>
        </div>
        <div className='flex flex-row gap-5 mt-5'>
          {socialMedia.map((link, index)=> (
            <a
              key={index}
              href={link.href}
              className='hover:opacity-50 hover:scale-110'
            >
              {mode === 'dark' && !loading ? (
                React.cloneElement(link.icon, { fillColor:"white" })
              ) : (
                React.cloneElement(link.icon, { fillColor: "black"})
              )}
            </a>
          ))}
        </div>
      </div>
      <Image src={HeroImage} alt='HeroImage' width={700} className='min-w-[400px]'/>
    </div>
  )
}

export default Home