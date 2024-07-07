import React from 'react'

const Contactbox = ({title, secTitle, icon}) => {
  return (
    <div className="contact-box flex flex-col sm:p-4 md:py-10 py-6 md:w-56 sm:w-40 w-32 bg-white gap-2 text-center text-md hover:border-red-400 border hover:bg-red-200 transition-colors hover:scale-95 shadow-sm hover:shadow-xl">
        <i className={`${icon} text-red-500 sm:text-2xl text-xl`}></i>
        <span className='font-semibold sm:text-xl text-base'>{title}</span>
        <span className='md:text-base text-xs'>{secTitle}</span>
    </div>
  )
}

export default Contactbox