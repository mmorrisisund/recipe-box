import { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { useAlert } from '../AlertContext'
import { useRecipesDipatch } from '../RecipeStoreContext'

const AddRecipeModal = ({ onClose }) => {
  const dispatch = useRecipesDipatch()
  const [title, setTitle] = useState('')
  const [source, setSource] = useState('')
  const [image, setImage] = useState('')
  const [ingredients, setIngredients] = useState('')
  const { setMessage } = useAlert()

  const setState = setter => e => setter(e.target.value)
  const trim = s => s.trim()

  const handleSubmit = e => {
    e.preventDefault()

    const newRecipe = {
      name: title,
      ingredients: ingredients.split(',').map(trim),
      img: image,
      source
    }
    dispatch({
      type: 'add',
      payload: newRecipe
    })
    setMessage('Recipe Added!')
    onClose()
  }
  return (
    <div>
      <button
        className='fixed inset-0 flex items-center justify-center w-full h-full bg-gray-700 opacity-50 cursor-default'
        onClick={() => onClose()}
        type='button'
      ></button>
      <form
        onSubmit={handleSubmit}
        className='absolute w-1/2 p-8 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg top-1/2 left-1/2 min-w-max'
      >
        <header className='flex items-center justify-between'>
          <h2 className='text-3xl font-thin tracking-widest text-gray-800'>
            add new recipe
          </h2>
          <span className='text-xl'>
            <button onClick={() => onClose()} type='button'>
              <CgClose className='fill-current text-lime-600' />
            </button>
          </span>
        </header>
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
            add
          </button>
        </footer>
      </form>
    </div>
  )
}

export default AddRecipeModal
