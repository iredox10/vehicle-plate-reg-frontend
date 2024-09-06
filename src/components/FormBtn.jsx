import React from 'react'

const FormBtn = ({text}) => {
  return (
        <button type='submit'
        className='capitalize font-bold p-2 bg-white text-black'
        >{text}</button>
  )
}

export default FormBtn