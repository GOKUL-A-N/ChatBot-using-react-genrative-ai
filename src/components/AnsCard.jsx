import React from 'react'

const AnsCard = (props) => {
  return (
    <div className='neu p-4'>
        <p className='text-green-500'>{props.title}</p>
        <p>{props.value}</p>
    </div>
  )
}

export default AnsCard