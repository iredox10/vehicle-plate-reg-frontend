import React from 'react'

const Btn = ({text,onclick}) => {
  return (
    <div>
        <button type='button' onClick={onclick} className='bg-white p-2 capitalize font-medium'>{text}</button>
    </div>
  )
}

export default Btn