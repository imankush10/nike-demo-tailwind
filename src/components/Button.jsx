import React from 'react'

const Button = ({label, iconURL}) => {
  return (
    <button className='flex justify-center items-center bg-coral-red rounded-full gap-2 px-7 py-4 text-white font-montserrat text-lg leading-none border border-coral-red'>
      {label}
      <img src={iconURL} className='w-5 h-5 rounded-full ml-2'/>
    </button>
  )
}

export default Button