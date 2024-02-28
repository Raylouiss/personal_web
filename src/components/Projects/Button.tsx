import React from 'react'


interface ButtonProps {
    text: string
    icon_name: string
}

const Button = ({ text, icon_name }: ButtonProps): JSX.Element => {
  return (
    <div className={`h-[15px] w-[100px] sm:h-[25px] sm:w-[140px]  text-xs sm:text-base flex flex-row justify-center items-center overflow-hidden py-5 hover:translate-y-[-4px] font-mulish rounded bg-foreground drop-shadow-button hover:animate-pulse cursor-pointer`}>
        <span className='mr-[10px] font-semibold text-background'> {text}</span>
        <i className={`fas ${icon_name} text-background`}></i>
    </div>
  )
}

export default Button