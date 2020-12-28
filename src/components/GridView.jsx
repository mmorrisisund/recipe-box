import { Link } from 'react-router-dom'

import GridCard from './GridCard'

const GridView = ({ recipes }) => {
  return (
    <div>
      <ul className='flex flex-wrap items-stretch space-x-4 justify-evenly'>
        {recipes.map(recipe => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <GridCard imageUrl={recipe.img} name={recipe.name} />
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default GridView
