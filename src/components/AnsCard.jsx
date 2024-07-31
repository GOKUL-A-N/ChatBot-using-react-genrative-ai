import React from 'react'

const AnsCard = (props) => {
  return (
    <div className='p-4'>
        <div className='w-full flex items-end justify-end'>
        <p className='rounded-md pl-2 pr-2 pb-1 pt-1 text-black font-semibold text-right bg-white'>{props.title}</p>
        </div><br />
        <div className='w-full flex items-start justify-start'>
        <p className='rounded-md pl-2 pr-2 pb-1 pt-1 text-white bg-transparent border-2 font-semibold text-left border-white'>{props.value}</p>
        </div>
    </div>
  )
}

export default AnsCard