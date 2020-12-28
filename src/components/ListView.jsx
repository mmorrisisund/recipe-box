import { Link } from 'react-router-dom'

const ListView = ({ recipes }) => {
  return (
    <div>
      <ul className='flex flex-col items-start justify-center space-y-12'>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <Link
              className='px-5 py-4 text-xl rounded-lg text-lime-800 bg-lime-300 hover:bg-lime-500'
              to={`/recipe/${recipe.id}`}
            >
              {recipe.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListView
