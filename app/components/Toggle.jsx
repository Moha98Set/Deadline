'use client'

import { useState } from 'react'

const Toggle = ({ onChange }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = () => {
    const next = !isChecked
    setIsChecked(next)
    if (onChange) onChange(next)
  }

  return (
    <label className='flex cursor-pointer select-none items-center'>
      <div className='relative'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleChange}
          className='sr-only'
        />
        <div className='h-4 w-12 rounded-full bg-[#E5E7EB] shadow-inner'></div>
        <div className={`absolute top-[-4px] h-6 w-6 rounded-full bg-white transition-all border border-slate-300 ${isChecked ? 'left-6' : 'left-0'}`}></div>
      </div>
    </label>
  )
}

export default Toggle
