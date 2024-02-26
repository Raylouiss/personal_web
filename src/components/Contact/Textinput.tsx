import React from 'react'

interface textInputProps {
    id: string
    title: string
    placeholder: string
    type: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required: boolean;
}

const Textinput = ({ id, title, placeholder, type, value, onChange, required }: textInputProps): JSX.Element => {
  return (
    <div>
        <h3 className='font-mulish mb-[5px]'>{title}</h3>
        <input
          id={id}
          type={type}
          value={value}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          onChange= {onChange}
          required={required}
        />
    </div>
  )
}

export default Textinput