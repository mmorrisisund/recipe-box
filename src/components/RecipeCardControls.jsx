const RecipeCardControls = ({ source, onEdit, onDelete }) => {
  return (
    <ul className='flex w-full mt-6 space-x-3 text-center'>
      <a
        href={source}
        target='_blank'
        rel='noreferrer noopener'
        className='flex-1 px-10 py-3 text-lg rounded-xl bg-lime-600 text-lime-100'
      >
        <li className=''>source</li>
      </a>
      <button
        type='button'
        className='flex-1 px-10 py-3 text-lg rounded-xl bg-lime-600 text-lime-100'
        onClick={onEdit}
      >
        <li>edit</li>
      </button>
      <button
        type='button'
        className='flex-1 px-10 py-3 text-lg rounded-xl bg-lime-600 text-lime-100'
        onClick={onDelete}
      >
        <li>delete</li>
      </button>
    </ul>
  )
}

export default RecipeCardControls
