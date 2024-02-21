import React from 'react'


interface ButtonProps {
    text: string
    icon_name: string
    height: string
    width: string
}

const Button = ({ text, icon_name, height, width }: ButtonProps): JSX.Element => {
  return (
    <div className={`${width} ${height} flex flex-row justify-center items-center overflow-hidden py-5 hover:translate-y-[-4px] font-mulish rounded bg-foreground drop-shadow-button hover:animate-pulse cursor-pointer`}>
        <a className='mr-[10px] font-semibold text-background'> {text}</a>
        <i className={`fas ${icon_name} text-background`}></i>
    </div>
  )
}

export default Button