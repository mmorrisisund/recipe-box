import { useState } from 'react'

const EditForm = ({ recipe, onSubmit }) => {
  const [title, setTitle] = useState(recipe.name)
  const [source, setSource] = useState(recipe.source)
  const [image, setImage] = useState(recipe.img)
  const [ingredients, setIngredients] = useState(recipe.ingredients.join(', '))

  const setState = setter => e => setter(e.target.value)
  const trim = s => s.trim()

  const handleSubmit = e => {
    e.preventDefault()

    const newRecipe = { ...recipe }
    newRecipe.name = title
    newRecipe.source = source
    newRecipe.img = image
    newRecipe.ingredients = ingredients.split(',').map(trim)

    onSubmit(newRecipe)
  }

  return (
    <form onSubmit={handleSubmit} className='w-full bg-white rounded-lg '>
      <main className='mt-8'>
        <div className='space-y-3 text-gray-700'>
          <label className='block'>
            <span>Title</span>
            <input
              type='text'
              className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-lime-500 focus:ring focus:ring-lime-400 focus:ring-opacity-50'
              onChange={setState(setTitle)}
              value={title}
              required
            />
          </label>
          <label className='block'>
            <span>Source URL</span>
            <input
              type='text'
              className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-lime-500 focus:ring focus:ring-lime-400 focus:ring-opacity-50'
              onChange={setState(setSource)}
              value={source}
            />
          </label>
          <label className='block'>
            <span>Image URL</span>
            <input
              type='text'
              className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-lime-500 focus:ring focus:ring-lime-400 focus:ring-opacity-50'
              onChange={setState(setImage)}
              value={image}
            />
          </label>
          <label className='block'>
            <span>Ingredients</span>
            <span className='block text-sm text-gray-500'>
              Separate by comma
            </span>
            <input
              type='text'
              className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-lime-500 focus:ring focus:ring-lime-400 focus:ring-opacity-50'
              onChange={setState(setIngredients)}
              value={ingredients}
              required
            />
          </label>
        </div>
      </main>
      <footer className='flex items-center justify-end mt-8'>
        <button
          className='px-4 py-3 text-xl tracking-wide rounded-lg text-lime-100 bg-lime-600'
          type='submit'
        >
          submit changes
        </button>
      </footer>
    </form>
  )
}

export default EditForm
