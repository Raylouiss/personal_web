import React from 'react'

interface textInputProps {
    id: string
    title: string
    placeholder: string
    rows: number
    value: string
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    required: boolean;
}

const Textarea = ({ id, title, placeholder, rows, value, onChange, required }: textInputProps): JSX.Element => {
  return (
    <div>
        <h3 className='font-mulish mb-[5px]'>{title}</h3>
        <textarea id={id} rows={rows} value={value} onChange= {onChange} required={required} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder= {placeholder}></textarea>
    </div>
  )
}

export default Textarea