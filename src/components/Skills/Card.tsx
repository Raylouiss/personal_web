import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

interface CardProps{
    title: string
    desc: string
    image: string
    tools: string[]
}

const Card = ({ title, image, desc, tools} : CardProps): JSX.Element => {
  
  return (
    <div className='max-w-[400px] h-auto flex flex-col border-[3px] px-10 py-10 mb-[50px] lg:mb-[0px]'>
        <div className='flex flex-row gap-5 items-center mb-5'>
            <i className={`fas ${image} text-foreground text-[50px]`}> </i>
            <h2 className='text-2xl font-bold'>{title}</h2>
        </div>
        <div className='flex flex-row mt-3 mb-3'>
            <div className='w-[1px] h-full'></div>
            <h3 className='text-md'>
                {desc}
            </h3>
        </div>
        <div className='flex flex-wrap mt-3 mb-5'>
            {tools.map((tool, index) => (
                <h4
                    key={index}
                    className='px-3 py-1 rounded-[10px] text-sm font-semibold mr-2 mb-2 hover:translate-y-[-4px] bg-foreground text-background'
                >
                    {tool}
                </h4>
            ))}
        </div>
    </div>
  )
}

export default Card