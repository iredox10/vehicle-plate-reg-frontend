import React from 'react'

const FormInput = ({labelFor,lableName,type,onchange,value,name}) => {
  return (
    <div className='flex flex-col my-3'>
        <label htmlFor={labelFor} className='capitalize font-medium'>{lableName}</label>
        <input type={type} name={name}
         onChange={onchange} value={value}
         className='w-full border-2 border-green-700 rounded-lg p-2'
           />
    </div>
  )
}

export default FormInput