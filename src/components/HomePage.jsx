import { useRecipesState } from '../RecipeStoreContext'
import RecipeList from './RecipeList'

const HomePage = ({ viewMode }) => {
  const recipes = useRecipesState()
  return (
    <div className='p-12'>
      <RecipeList gridView={viewMode === 'grid'} recipes={recipes} />
    </div>
  )
}

export default HomePage
