import React from 'react'

export const ErrorMsg = ({err}) => {
  return (
    <div>
      <p className="text-red-500 text-xl font-bold capitalize">{err}</p>
    </div>
  );
}
