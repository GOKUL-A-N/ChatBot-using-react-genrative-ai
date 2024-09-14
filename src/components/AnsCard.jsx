import React from 'react'

const AnsCard = (props) => {
  return (
    <div className='p-4'>
        <h2 className='font-semibold'><span className=""><span className="bg-[#0093d9]">$user@chatbot</span><span className="bg-[#1fbc0d]">/gen-ai</span> </span><span className='text-[#198147] font-bold'> ~ </span> <span className='text-[#1fbc0d]'>{props.title}</span></h2>
        <p>{props.value}</p>
    </div>
  )
}

export default AnsCard