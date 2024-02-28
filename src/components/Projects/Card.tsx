"use client"

import Image from 'next/image'
import { StaticImageData } from 'next/image'
import React, { useEffect, useState } from 'react'
import Button from '@/components/Projects/Button'
import Link from 'next/link'

interface CardProps {
    name: string
    thumbnail:StaticImageData
    desc: string
    tools: string[],
    github: string,
    link: string,
}

interface ButtonProps {
    text: string
    icon_name: string
    height: string
    width: string
}

const buttonCode: ButtonProps = {
    text: "View Code",
    icon_name: "fa-code",
}

const buttonView: ButtonProps = {
    text: "View Project",
    icon_name: "fa-eye",
}

const Card = ({ name, thumbnail, desc, tools, github, link }: CardProps): JSX.Element => {

  const [onHover, setOnHover] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (onHover){
        timer = setTimeout(() => {
            setShowDetails(true);
        }, 200);
    } else {
        setShowDetails(false);
    }

    return () => {
        clearTimeout(timer);
    }
  }, [onHover])
  
  return (
    <div className='relative flex flex-col justify-center items-center overflow-hidden font-marcellus scale-95 hover:scale-100 min-h-[400px] max-w-[400px] rounded-2xl'
    onMouseEnter={()=> setOnHover(true)}
    onMouseLeave={()=> {setTimeout(()=> setOnHover(false), 300); setShowDetails(false);}}
    >
        <Image
            src={thumbnail}
            alt='thumbnail'
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            className={` ${showDetails ? 'opacity-10' : 'opacity-100'} ` }
        />
         <div className='absolute bottom-0 min-h-[50px] bg-foreground w-full flex justify-center items-center'>
            <h3 className='text-background font-bold text-xl'>
                {name}
            </h3>
        </div>
        <div className={`relative flex flex-col w-full h-auto items-start px-10 py-10 cursor-pointer ${showDetails ? 'opacity-80' : 'opacity-0'}`}>
            <div className='flex items-center mb-2 sm:mb-5 mt-[-50px]'>
                <h2 className='text-lg sm:text-2xl font-bold'>{name}</h2>
            </div>
            <div className='flex flex-row mb-2 sm:mt-3 sm:mb-3'>
                <div className='w-[1px] h-full'></div>
                <h3 className='text-xs sm:text-base text-justify'>
                    {desc}
                </h3>
            </div>
            <div className='flex flex-wrap sm:mt-3 sm:mb-5 mb-2'>
                {tools.map((tool, index) => (
                    <h4
                        key={index}
                        className='px-3 py-1 rounded-[10px] text-xs sm:text-sm font-semibold mr-2 mb-2 hover:translate-y-[-4px] bg-foreground text-background'
                    >
                        {tool}
                    </h4>
                ))}
            </div>
            <div className='flex flex-wrap gap-5'>
                <Link href={link} className={`${link == "" ? 'hidden': 'block'}`}>
                    <Button {...buttonView}/>
                </Link>
                <Link href={github} className={`${github == "" ? 'hidden': 'block'}`}>
                    <Button {...buttonCode}/>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Card