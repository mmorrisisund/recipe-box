import React from 'react'

const IngredientsList = ({ ingredients }) => {
  return (
    <div className='w-full p-8 mt-4 rounded bg-lime-200'>
      <h3 className='text-2xl text-lime-900'>Ingredients</h3>
      {ingredients && (
        <ul className='list-inside text-lime-900'>
          {ingredients.map(ingredient => (
            <li
              key={ingredient}
              className='mt-2 text-xl'
              style={{ listStyleType: 'circle' }}
            >
              {ingredient}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default IngredientsList
