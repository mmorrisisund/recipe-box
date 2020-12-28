import React from 'react'

const GridCard = ({ imageUrl, name }) => {
  return (
    <li className='flex flex-col items-center w-64 h-full p-6 border rounded shadow-md'>
      <img
        className='object-cover w-full h-full rounded-t'
        src={imageUrl}
        alt='meal'
      />
      <div className='mt-4'>
        <h3 className='text-xl text-center text-lime-800'>{name}</h3>
      </div>
    </li>
  )
}

export default GridCard
